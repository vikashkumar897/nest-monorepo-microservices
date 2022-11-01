import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/mynestapp')],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
