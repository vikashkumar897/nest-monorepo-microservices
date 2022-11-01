import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CUSTOMER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get('customers')
  async getCustomers(): Promise<any> {
    this.client.emit('Hello', 'something');
    return 'Result';
  }

  @Get('products')
  async getProducts(): Promise<string> {
    const helloValue = await this.appService.getProducts();
    return helloValue;
  }
}
