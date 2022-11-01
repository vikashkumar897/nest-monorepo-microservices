import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CustomersService } from './customers.service';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // @MessagePattern('gettingCustomers')
  // getHello(): string {
  //   return this.customersService.getHello();
  // }

  @EventPattern('Hello')
  getHello(): string {
    return this.customersService.getHello();
  }
}
