import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

export type User = any;

@Injectable()
export class UsersService extends TypeOrmCrudService<Users> {
  private readonly users: Users[];

  constructor(@InjectRepository(Users) repo) {
    super(repo);
  }
}
