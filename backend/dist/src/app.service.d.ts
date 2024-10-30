import { KafkaService } from './kafka/kafka.service';
export declare class AppService {
    private readonly kafkaService;
    constructor(kafkaService: KafkaService);
    getHello(): string;
    onModuleInit(): Promise<void>;
    fetchDataAndProduce(): Promise<void>;
}
