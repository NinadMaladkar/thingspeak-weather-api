import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { Weather } from './weather/entities/weather.entity';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    KafkaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'db',
      port: 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'weather',
      entities: [Weather],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Weather]),
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
