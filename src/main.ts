import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Nest example')
    .setDescription('The nest API description')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const userDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/', app, userDocument);
  await app.listen(3000);
}
bootstrap();
