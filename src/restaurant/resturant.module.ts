import { Module } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { ResturantController } from './resturant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant,RestaurantSchema } from './schemas/restaurant.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Restaurant.name, schema:RestaurantSchema}
    ])
  ],
  controllers: [ResturantController],
  providers: [ResturantService],
})
export class ResturantModule {}
