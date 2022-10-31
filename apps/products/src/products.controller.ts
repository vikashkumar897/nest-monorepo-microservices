import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly customersService: ProductsService) {}

  @MessagePattern('gettingProducts')
  getHello(): string {
    return this.customersService.getProducts();
  }
}
