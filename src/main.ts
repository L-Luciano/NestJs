import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Nest example')
    .setDescription('The nest API description')
    .setVersion('1.0')
    .build();
  const userDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/', app, userDocument);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
