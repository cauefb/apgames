import { Injectable } from '@nestjs/common';
import { UserEntity } from '../app/users/entities/user.entity';
import { UsersService } from '../app/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = {  id: user.id,name: user.firstName, sub: user.email };

    return {
      token: this.jwtService.sign(payload),
      payload
    };
  }

  async validateUser(email: string, password: string) {
    let user: UserEntity;
    try {
      user = await this.userService.findOneOrFail({ email });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;
    console.log(user);
    return user;
  }
}