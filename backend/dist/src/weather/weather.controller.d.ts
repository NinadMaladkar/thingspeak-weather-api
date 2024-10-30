import { WeatherService } from './weather.service';
import { WeatherInfoDto } from './dto/weather-info.dto';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    findAll(): Promise<WeatherInfoDto[]>;
    findOne(id: string): Promise<WeatherInfoDto>;
}
