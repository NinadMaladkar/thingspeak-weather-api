import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBasicAuth,
} from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import { BasicAuthGuard } from '../auth/basic-auth.guard';
import { WeatherInfoDto } from './dto/weather-info.dto';

@ApiTags('weather')
@ApiBasicAuth()
@UseGuards(BasicAuthGuard)
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiOperation({ summary: 'Get all weather related data' })
  findAll() {
    return this.weatherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weatherService.findOne(+id);
  }
}
