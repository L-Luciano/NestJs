import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/user.entity';
import { TerminusOptionsService } from './terminus-options/terminus-options.service';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      username: 'nest',
      password: 'nest',
      database: 'nest',
      entities: [User],
      synchronize: false,
    }),
    UserModule,
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  controllers: [],
  providers: [TerminusOptionsService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
