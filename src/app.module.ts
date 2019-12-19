import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { TerminusOptionsService } from './terminus-options/terminus-options.service';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { Users } from './users/users.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import database from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [database] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get<string>('db.host'),
        port: configService.get<number>('db.port'),
        username: configService.get<string>('db.username'),
        password: configService.get<string>('db.password'),
        database: configService.get<string>('db.database'),
        synchronize: false,
        logging: true,
        entities: [Users],
      }) as TypeOrmModuleAsyncOptions,
      inject: [ConfigService],
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
  constructor(private readonly configService: ConfigService) {}
}
