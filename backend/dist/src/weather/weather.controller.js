"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const weather_service_1 = require("./weather.service");
const basic_auth_guard_1 = require("../auth/basic-auth.guard");
const weather_info_dto_1 = require("./dto/weather-info.dto");
let WeatherController = class WeatherController {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    findAll() {
        return this.weatherService.findAll();
    }
    findOne(id) {
        return this.weatherService.findOne(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all weather related data' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all weather related data.',
        type: [weather_info_dto_1.WeatherInfoDto],
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WeatherController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get weather data related to an ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return weather data related to an ID.',
        type: weather_info_dto_1.WeatherInfoDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Weather data not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WeatherController.prototype, "findOne", null);
WeatherController = __decorate([
    (0, swagger_1.ApiTags)('weather'),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Controller)('weather'),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherController);
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map