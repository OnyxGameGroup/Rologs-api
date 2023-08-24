import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModerationsModule } from './moderations/moderations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModerationEntity } from './moderations/moderation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'rolox',
      entities: [ModerationEntity],
      synchronize: true,
    }),
    ModerationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
