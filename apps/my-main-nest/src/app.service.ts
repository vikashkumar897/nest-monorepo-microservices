import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private customersClient: ClientProxy;
  private productClient: ClientProxy;

  constructor() {
    this.customersClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    });
    this.productClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 5000,
      },
    });
  }

  public getCustomers(): Promise<string> {
    return this.customersClient
      .send<string, object>('gettingCustomers', {})
      .toPromise();
  }

  public getProducts(): Promise<string> {
    return this.productClient
      .send<string, object>('gettingProducts', {})
      .toPromise();
  }
}
