import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeatherService } from './weather.service';
import { Weather } from './entities/weather.entity';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

describe('WeatherService', () => {
  let service: WeatherService;
  let repository: Repository<Weather>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        {
          provide: getRepositoryToken(Weather),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
    repository = module.get<Repository<Weather>>(getRepositoryToken(Weather));
  });

  describe('findAll', () => {
    it('should return an array of WeatherInfoDto', async () => {
      // Arrange
      const weatherEntities = [
        {
          createdAt: new Date(),
          temperature: 20,
          humidity: 50,
          pressure: 1013,
          powerLevel: 5,
          windSpeed: 10,
          precipitation: 0,
          windDirection: 'N',
          uv: 3,
        },
      ];
      jest.spyOn(repository, 'find').mockResolvedValue(weatherEntities as any);

      // Act
      const result = await service.findAll();

      // Assert
      expect(result).toEqual(weatherEntities);
    });

    it('should throw an InternalServerErrorException if repository fails', async () => {
      // Arrange
      jest
        .spyOn(repository, 'find')
        .mockRejectedValue(new Error('Repository error'));

      // Act & Assert
      await expect(service.findAll()).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  describe('findOne', () => {
    it('should return a WeatherInfoDto if entity is found', async () => {
      // Arrange
      const weatherEntity = {
        createdAt: new Date(),
        temperature: 20,
        humidity: 50,
        pressure: 1013,
        powerLevel: 5,
        windSpeed: 10,
        precipitation: 0,
        windDirection: 'N',
        uv: 3,
      };
      jest.spyOn(repository, 'findOne').mockResolvedValue(weatherEntity as any);

      // Act
      const result = await service.findOne(1);

      // Assert
      expect(result).toEqual(weatherEntity);
    });

    it('should throw a NotFoundException if entity is not found', async () => {
      // Arrange
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);

      // Act & Assert
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });

    it('should throw an InternalServerErrorException if repository fails', async () => {
      // Arrange
      jest
        .spyOn(repository, 'findOne')
        .mockRejectedValue(new Error('Repository error'));

      // Act & Assert
      await expect(service.findOne(1)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
