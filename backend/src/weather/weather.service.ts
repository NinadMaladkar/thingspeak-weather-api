import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './entities/weather.entity';
import { WeatherInfoDto } from './dto/weather-info.dto';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}

  async findAll(): Promise<WeatherInfoDto[]> {
    const weatherEntities = await this.weatherRepository.find();
    return weatherEntities.map((entity) => ({
      createdAt: entity.createdAt,
      temperature: entity.temperature,
      humidity: entity.humidity,
      pressure: entity.pressure,
      gas: entity.gas,
      windSpeed: entity.windSpeed,
      precipitation: entity.precipitation,
      windDirection: entity.windDirection,
      uv: entity.uv,
    }));
  }

  async findOne(id: number): Promise<WeatherInfoDto> {
    const entity = await this.weatherRepository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('Weather data not found');
    }
    return {
      createdAt: entity.createdAt,
      temperature: entity.temperature,
      humidity: entity.humidity,
      pressure: entity.pressure,
      gas: entity.gas,
      windSpeed: entity.windSpeed,
      precipitation: entity.precipitation,
      windDirection: entity.windDirection,
      uv: entity.uv,
    };
  }
}
