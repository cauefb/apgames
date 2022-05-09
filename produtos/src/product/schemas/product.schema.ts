import { AutoMap } from "@automapper/classes";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ProductModel {
    @Prop()
    @AutoMap()
    id: string;
    @Prop()
    @AutoMap()
    name: string;
    @Prop()
    @AutoMap()
    category: string;
    @Prop()
    @AutoMap()
    manufacturer: string;
    @Prop()
    @AutoMap()
    description: string;
    @Prop()
    @AutoMap()
    imageUrl: string;
    @Prop()
    @AutoMap()
    price: number;
    @Prop()
    createdDate: Date;
    @Prop()
    updatedDate: Date;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);