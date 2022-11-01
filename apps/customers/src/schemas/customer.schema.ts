import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type customerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  sex: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
