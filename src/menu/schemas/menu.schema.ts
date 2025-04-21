// menu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Restaurant } from 'src/restaurant/schemas/restaurant.schema';

@Schema({ timestamps: true })
export class Menu extends Document {
  @Prop({ required: true })
  title: string; // e.g., Lunch Menu, Drinks

  @Prop({ type: Types.ObjectId, ref: 'Restaurant', required: true })
  restaurant: Types.ObjectId;

  @Prop()
  description: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
