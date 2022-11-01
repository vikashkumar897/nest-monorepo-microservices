import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { CustomersModule } from './customers.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CustomersModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://ywcdpbud:hD3w3PYwpfjing3p02vwcX_IB4DUF2hT@puffin.rmq2.cloudamqp.com/ywcdpbud',
      ],
      queue: 'customer_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
}
bootstrap();
