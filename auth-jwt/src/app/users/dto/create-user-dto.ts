import { IsEmail,IsNotEmpty,Matches } from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helpers';
import { ApiProperty } from "@nestjs/swagger";
import { MessagesHelper } from 'src/helpers/messages.helpers';
import { AutoMap } from "@automapper/classes";

export class CreateUserDto {

    
    @AutoMap()
    @ApiProperty()
    @IsNotEmpty({message: "Nome não pode ser em branco."})
    firstName: string;

    
    @AutoMap()
    @ApiProperty()
    @IsNotEmpty({message: "Sobrenome não pode ser em branco."})
    lastName: string;

    
    @AutoMap()
    @ApiProperty()
    @IsNotEmpty({message: "Email não pode ser em branco."})
    @IsEmail({message: "digite um email válido."})
    email: string;

    
    @AutoMap()
    @ApiProperty()
    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID})
    password: string;

  
}


