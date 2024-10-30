"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthGuard = void 0;
const common_1 = require("@nestjs/common");
let BasicAuthGuard = class BasicAuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Basic ')) {
            throw new common_1.UnauthorizedException('Missing or invalid authorization header');
        }
        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        if (username === 'admin' && password === 'password') {
            return true;
        }
        throw new common_1.UnauthorizedException('Invalid credentials');
    }
};
BasicAuthGuard = __decorate([
    (0, common_1.Injectable)()
], BasicAuthGuard);
exports.BasicAuthGuard = BasicAuthGuard;
//# sourceMappingURL=basic-auth.guard.js.map