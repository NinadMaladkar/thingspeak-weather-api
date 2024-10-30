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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const typeorm_1 = require("typeorm");
let Weather = class Weather {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Weather.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Weather.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "humidity", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "pressure", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "gas", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "windSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "precipitation", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "windDirection", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Weather.prototype, "uv", void 0);
Weather = __decorate([
    (0, typeorm_1.Entity)()
], Weather);
exports.Weather = Weather;
//# sourceMappingURL=weather.entity.js.map