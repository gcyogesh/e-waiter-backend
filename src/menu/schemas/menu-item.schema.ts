// menu-item.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Menu } from './menu.schema';

@Schema({ timestamps: true })
export class MenuItem extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  image: string;

  @Prop({ type: Types.ObjectId, ref: 'Menu', required: true })
  menu: Types.ObjectId;

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop([String])
  tags: string[]; // e.g., ['spicy', 'vegan']
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
