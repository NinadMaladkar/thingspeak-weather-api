"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const kafkajs_1 = require("kafkajs");
const weather_entity_1 = require("../weather/entities/weather.entity");
const typeorm_2 = require("typeorm");
let KafkaService = class KafkaService {
    constructor(weatherRepository) {
        this.weatherRepository = weatherRepository;
        this.kafka = new kafkajs_1.Kafka({
            clientId: 'backend',
            brokers: ['kafka:9092'],
        });
    }
    async onModuleInit() {
        this.producer = this.kafka.producer({
            createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner,
        });
        await this.producer.connect();
        this.consumer = this.kafka.consumer({ groupId: 'nestjs-group' });
        await this.consumer.connect();
        await this.consumer.subscribe({
            topic: 'thingspeak-data',
            fromBeginning: true,
        });
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    const data = JSON.parse(message.value.toString());
                    console.log('Received data from Kafka:', data, topic, partition);
                    const weatherEntities = data.feeds.map((feed) => {
                        const { created_at, field1, field2, field3, field4, field5, field6, field7, field8, } = feed;
                        const weather = new weather_entity_1.Weather();
                        weather.createdAt = new Date(created_at);
                        weather.temperature = parseFloat(field1);
                        weather.humidity = parseFloat(field2);
                        weather.pressure = parseFloat(field3);
                        weather.gas = parseFloat(field4);
                        weather.windSpeed = parseFloat(field5);
                        weather.precipitation = parseFloat(field6);
                        weather.windDirection = parseFloat(field7);
                        weather.uv = parseFloat(field8);
                        return weather;
                    });
                    await Promise.all(weatherEntities.map((weather) => this.weatherRepository.save(weather)));
                }
                catch (error) {
                    console.error('Error processing message - ', error);
                }
            },
        });
    }
    async produceMessage(data) {
        await this.producer.send({
            topic: 'thingspeak-data',
            messages: [{ value: JSON.stringify(data) }],
        });
    }
    async onModuleDestroy() {
        await this.producer.disconnect();
        await this.consumer.disconnect();
    }
};
KafkaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(weather_entity_1.Weather)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KafkaService);
exports.KafkaService = KafkaService;
//# sourceMappingURL=kafka.service.js.map