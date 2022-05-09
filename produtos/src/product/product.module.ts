import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductProfile } from './mappers/product.profle';
import { ProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      }
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductProfile,ProductService,ProductRepository]
})
export class ProductModule {}
