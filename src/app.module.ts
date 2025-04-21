import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './menu/menu.module';
import { ResturantModule } from './restaurant/resturant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    OrdersModule,
    MenuModule,
    ResturantModule
  ],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
