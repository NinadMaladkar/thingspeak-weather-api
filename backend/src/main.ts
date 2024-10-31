import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as YAML from 'yamljs';
import { SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config({ path: '../../.env' });

  const swaggerDocument = YAML.load('./src/swagger.yaml');
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
