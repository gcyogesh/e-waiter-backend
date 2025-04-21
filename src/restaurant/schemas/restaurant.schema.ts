// restaurant.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Restaurant extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  image: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
