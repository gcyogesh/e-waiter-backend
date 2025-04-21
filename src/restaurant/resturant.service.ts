import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schemas/restaurant.schema';
import { Model } from 'mongoose';
import { InternalServerErrorException } from '@nestjs/common';


@Injectable()
export class ResturantService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel:Model<Restaurant>
  ){}

  async create(createDto: CreateResturantDto): Promise<Restaurant> {
    try {
      const created = new this.restaurantModel(createDto);
      return await created.save();
    } catch (error) {
      throw new InternalServerErrorException('Failed to create restaurant', error);
    }
  }

  async findAll(): Promise<{ message:string, count:number, data:Restaurant[]}> {
    try {
      const data= await this.restaurantModel.find().exec();
      return {
        message: 'Sucessfully fetched data of resturants',
        count:data.length,
        data,
      }
       
    } catch (error) {
      
       throw new InternalServerErrorException("Failed to fetch data of resturants", error)
    }
  }

  async findOne(id: string): Promise<Restaurant> {
    try {
      const resturant = await this.restaurantModel.findById(id).exec();
      if(!resturant){
        throw new NotFoundException(`Resturant with given id ${id} not found`)
      }
      return resturant;
      
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch restaurant'), error;
      
    }
  }

  update(id: number, updateResturantDto: UpdateResturantDto) {
    return `This action updates a #${id} resturant`;
  }

  remove(id: number) {
    return `This action removes a #${id} resturant`;
  }
}
