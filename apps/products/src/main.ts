import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProductsModule, {
    transport: Transport.TCP,
    options: {
      port: 5000,
    },
  });
  await app.listen();
}
bootstrap();
