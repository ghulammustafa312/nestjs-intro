import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Product {
  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  seats: number;

  @Prop({ required: true })
  status: string;

  @Prop({ default: false })
  deletedCheck: boolean;

  @Prop({ required: true })
  isPaid: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
