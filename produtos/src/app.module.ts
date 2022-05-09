import { classes } from '@automapper/classes';
import { CamelCaseNamingConvention } from '@automapper/core';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/products'),
  AutomapperModule.forRoot({
  strategyInitializer: classes(),
  namingConventions: new CamelCaseNamingConvention(),
}),
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
