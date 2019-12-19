import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  Get,
} from '@nestjs/common';
import {
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
  CrudController,
} from '@nestjsx/crud';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { PasswordService } from './password/password.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserRole } from './enum/users.role';

@Crud({
  model: {
    type: Users,
  },
})
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('users')
export class UsersController {
  constructor(
    public service: UsersService,
    private passwordService: PasswordService,
  ) {}

  get base(): CrudController<Users> {
    return this;
  }

  @ApiQuery({ name: 'role', enum: UserRole })
  @Get('role')
  async filterByRole(@Query('role') role: UserRole = UserRole.User) {
    return this.service.find({role});
  }

  @Override()
  async createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Users) {
    dto.salt = await this.passwordService.generateSalt(10);
    dto.password = await this.passwordService.hashPassword(
      dto.password,
      dto.salt,
    );
    return this.base.createOneBase(req, dto);
  }
}
