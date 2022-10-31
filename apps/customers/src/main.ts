import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { CustomersModule } from './customers.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CustomersModule, {
    transport: Transport.TCP,
    options: {
      port: 4000,
    },
  });
  await app.listen();
}
bootstrap();
