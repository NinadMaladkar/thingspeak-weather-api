import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as YAML from 'yamljs';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Load the YAML file for swagger
  const swaggerDocument = YAML.load('./src/swagger.yaml');

  // Setup Swagger using the loaded YAML document
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(3001);
}
bootstrap();
