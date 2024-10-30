import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Weather } from './weather/entities/weather.entity';
export declare class AppController {
    private readonly appService;
    private weatherRepository;
    constructor(appService: AppService, weatherRepository: Repository<Weather>);
    getHello(): string;
    getAllWeatherData(): Promise<Weather[]>;
}
