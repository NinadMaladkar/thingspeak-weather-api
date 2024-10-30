import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Weather } from './weather/entities/weather.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  async getAllWeatherData() {
    return this.weatherRepository.find();
  }
}
