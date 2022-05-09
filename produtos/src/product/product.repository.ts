import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
//import { Db,Collection } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductRepository {
  
  constructor(@InjectModel(Product.name) private  collection: Model<Product>){ }
  
  // products: Product[] = [
  //   //{
  //   //   id: '1',
  //   //   name: 'PS5',
  //   //   price: 4500,
  //   //   description: 'videogame',
  //   //   imageUrl: 'http://google.com',
  //   //   createdDate: new Date(),
  //   //   updatedDate: new Date()
  //   // },
  // ];
  create(product:  Product) {
    product.createdDate = new Date();
    product.updatedDate = new Date();
    this.collection.insertMany(product);
    //console.log(product);
    return JSON.stringify(product);
  }

  async findAll(): Promise<Product[]>{

   // const productEntityArray: Product[] = await this.collection.find();

    //return productEntityArray;
    return this.collection.find()//.where('manufacturer', 'Nintendo'); 
  }

  async findOne(id: string): Promise<Product>{
    console.log(id);

    const productEntity: Product = await this.collection.findById(id);

    return  productEntity; //.find((product) => product.id === id);
  }

  update(id: string, product: Product) {
    return JSON.stringify(product);
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
