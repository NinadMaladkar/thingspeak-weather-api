import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { Weather } from 'src/weather/entities/weather.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [KafkaService, Weather],
  exports: [KafkaService],
})
export class KafkaModule {}
