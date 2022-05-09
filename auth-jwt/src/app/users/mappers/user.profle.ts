import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { CamelCaseNamingConvention, createMap, Mapper, namingConventions } from '@automapper/core';
import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user-dto";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class UserProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper){
        super(mapper);
    }
    
    override get  profile() {
        return (mapper) => {
            
            createMap(mapper, UserEntity, CreateUserDto, namingConventions(new CamelCaseNamingConvention));
            createMap(mapper, CreateUserDto, UserEntity, namingConventions(new CamelCaseNamingConvention));

            createMap(mapper, UserEntity, UpdateUserDto, namingConventions(new CamelCaseNamingConvention));
            createMap(mapper, UpdateUserDto, UserEntity, namingConventions(new CamelCaseNamingConvention));
        }
    }
}