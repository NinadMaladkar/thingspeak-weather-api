import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      const weatherEntities = await this.weatherRepository.find();
      return weatherEntities.map((entity) => ({
        createdAt: entity.createdAt,
        temperature: entity.temperature,
        humidity: entity.humidity,
        pressure: entity.pressure,
        powerLevel: entity.powerLevel,
        windSpeed: entity.windSpeed,
        precipitation: entity.precipitation,
        windDirection: entity.windDirection,
        uv: entity.uv,
      }));
    } catch (error) {
      console.error('Failed to fetch weather data', error);
      throw new InternalServerErrorException('Failed to fetch weather data');
    }
  }

  async findOne(id: number): Promise<WeatherInfoDto> {
    try {
      const weather = await this.weatherRepository.findOne({ where: { id } });
      if (!weather) {
        throw new NotFoundException('Weather data not found');
      }
      return weather;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Failed to fetch weather data', error);
      throw new InternalServerErrorException('Failed to fetch weather data');
    }
  }
}
