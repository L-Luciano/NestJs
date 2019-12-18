import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusOptionsService } from './terminus-options/terminus-options.service';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      username: 'nest',
      password: 'nest',
      database: 'nest',
      entities: [Users],
      synchronize: false,
    }),
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [TerminusOptionsService],
})
export class AppModule {
}
