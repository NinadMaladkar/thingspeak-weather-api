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
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @UseGuards(BasicAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all weather related data' })
  @ApiResponse({
    status: 200,
    description: 'Return all weather related data.',
    type: [WeatherInfoDto],
    isArray: true,
  })
  findAll() {
    return this.weatherService.findAll();
  }

  @UseGuards(BasicAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get weather data related to an ID' })
  @ApiResponse({
    status: 200,
    description: 'Return weather data related to an ID.',
    type: WeatherInfoDto,
  })
  @ApiResponse({ status: 404, description: 'Weather data not found.' })
  findOne(@Param('id') id: string) {
    return this.weatherService.findOne(+id);
  }
}
