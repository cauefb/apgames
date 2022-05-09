import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  const documentBuilder = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);  
  SwaggerModule.setup('swagger',app, document)
  await app.listen(3001);
}
bootstrap();
