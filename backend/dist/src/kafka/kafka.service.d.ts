import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Weather } from 'src/weather/entities/weather.entity';
import { Repository } from 'typeorm';
export declare class KafkaService implements OnModuleInit, OnModuleDestroy {
    private weatherRepository;
    private kafka;
    private producer;
    private consumer;
    constructor(weatherRepository: Repository<Weather>);
    onModuleInit(): Promise<void>;
    produceMessage(data: any): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
