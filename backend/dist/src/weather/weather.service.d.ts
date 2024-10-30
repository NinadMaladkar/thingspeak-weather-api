import { Repository } from 'typeorm';
import { Weather } from './entities/weather.entity';
import { WeatherInfoDto } from './dto/weather-info.dto';
export declare class WeatherService {
    private readonly weatherRepository;
    constructor(weatherRepository: Repository<Weather>);
    findAll(): Promise<WeatherInfoDto[]>;
    findOne(id: number): Promise<WeatherInfoDto>;
}
