import { AutoMap } from "@automapper/classes";

export class Product {
    @AutoMap()
    id: string;
    
    @AutoMap()
    name: string;
    
    @AutoMap()
    description: string;

    @AutoMap()
    category: string;
    
    @AutoMap()
    manufacturer: string;
    
    @AutoMap()
    imageUrl: string;
    
    @AutoMap()
    price: number;
    
    createdDate: Date;
    
    updatedDate: Date;
}
