import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
