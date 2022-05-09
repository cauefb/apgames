import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../app/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '10m' },
    }),],
    controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy]
  
})
export class AuthModule {}
