"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const YAML = require("yamljs");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerDocument = YAML.load('./src/swagger.yaml');
    swagger_1.SwaggerModule.setup('api-docs', app, swaggerDocument);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map