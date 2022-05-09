import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});

  const documentBuilder = new DocumentBuilder()
  .setTitle('Users API')
  .setDescription('')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);  
  SwaggerModule.setup('swagger',app, document)

  app.useGlobalPipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true}));
  await app.listen(3003);
}
bootstrap();
