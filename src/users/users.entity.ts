import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsOptional,
  IsDefined,
} from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from './enum/users.role';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @IsNotEmpty()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  salt: string;

  @IsPositive()
  @IsOptional()
  @Column({ nullable: true })
  @ApiProperty({
    description: 'The age of the user',
    type: Number,
    minimum: 1,
    default: 18,
  })
  age?: number;

  @Column({ default: false, insert: false })
  isActive: boolean;

  @IsEmail()
  @IsOptional()
  @Column({ nullable: true })
  @ApiProperty({ description: 'Contact email' })
  email: string;

  @Column({
    enum: UserRole,
    default: UserRole.User,
  })
  @ApiProperty({ enum: ['Admin', 'Moderator', 'User'] })
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty()
  role: UserRole;
}
