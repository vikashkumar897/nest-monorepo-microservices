import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('customers')
  async getCustomers(): Promise<string> {
    const helloValue = await this.appService.getCustomers();
    return helloValue;
  }

  @Get('products')
  async getProducts(): Promise<string> {
    const helloValue = await this.appService.getProducts();
    return helloValue;
  }
}
