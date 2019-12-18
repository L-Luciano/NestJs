import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordService } from './password/password.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService, PasswordService],
  exports: [UsersService, PasswordService],
  controllers: [UsersController],
})
export class UsersModule {}
