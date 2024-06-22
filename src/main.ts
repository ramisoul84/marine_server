import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Marine API')
    .setDescription('Marine Company Coroperation..')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService: ConfigService = app.get(ConfigService);
  const PORT: number = configService.get<number>('PORT');
  await app.listen(PORT, () =>
    console.log(`API Documentation -> http://localhost:${PORT}/api`),
  );
}

bootstrap();
