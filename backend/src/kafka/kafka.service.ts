// src/kafka/kafka.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Kafka, Producer, Consumer, Partitioners } from 'kafkajs';
import { Weather } from '../weather/entities/weather.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka = new Kafka({
    clientId: 'backend',
    brokers: ['kafka:9092'],
  });

  private producer: Producer;
  private consumer: Consumer;

  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
  ) {}

  async onModuleInit() {
    this.producer = this.kafka.producer({
      createPartitioner: Partitioners.LegacyPartitioner,
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

          const latestWeather = await this.findOneByLatestDate();
          const latestDate = latestWeather ? latestWeather : new Date(0);

          const weatherEntities: Weather[] = data.feeds
            .filter((feed) => new Date(feed.created_at) > latestDate)
            .map((feed) => {
              const {
                created_at,
                field1,
                field2,
                field3,
                field4,
                field5,
                field6,
                field7,
                field8,
              } = feed;

              const weather = new Weather();
              weather.createdAt = new Date(created_at);
              weather.windDirection = parseFloat(field1);
              weather.windSpeed = parseFloat(field2);
              weather.humidity = parseFloat(field3);
              weather.temperature = parseFloat(field4);
              weather.precipitation = parseFloat(field5);
              weather.pressure = parseFloat(field6);
              weather.powerLevel = parseFloat(field7);
              weather.uv = parseFloat(field8);

              return weather;
            });

          await this.weatherRepository.save(weatherEntities);
        } catch (error) {
          console.error('Error processing message - ', error);
        }
      },
    });
  }

  async produceMessage(data: Weather): Promise<void> {
    await this.producer.send({
      topic: 'thingspeak-data',
      messages: [{ value: JSON.stringify(data) }],
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.producer.disconnect();
    await this.consumer.disconnect();
  }

  async findOneByLatestDate(): Promise<Date | null> {
    const [latestWeather] = await this.weatherRepository.find({
      order: { createdAt: 'DESC' },
      take: 1,
    });

    return latestWeather?.createdAt || null;
  }
}
