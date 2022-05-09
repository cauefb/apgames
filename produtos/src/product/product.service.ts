import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {

  
  constructor( 
    private readonly productRepository: ProductRepository,
    @InjectMapper() private mapper: Mapper,) { }

  create(createProductDto: CreateProductDto) {
    const product = this.mapper.map(
      createProductDto,
      CreateProductDto,
      Product,
    );
    console.log(product)
    return this.productRepository.create(product);
  }
  
  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: string) {
    return this.productRepository.findOne(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
