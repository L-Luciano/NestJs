import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}
}
