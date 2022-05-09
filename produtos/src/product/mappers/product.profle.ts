import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { CamelCaseNamingConvention, createMap, Mapper, namingConventions } from '@automapper/core';
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper){
        super(mapper);
    }

    override get  profile() {
        return (mapper) => {
            createMap(mapper, Product, CreateProductDto, namingConventions(new CamelCaseNamingConvention));
            createMap(mapper, CreateProductDto, Product, namingConventions(new CamelCaseNamingConvention))
        }
    }
}