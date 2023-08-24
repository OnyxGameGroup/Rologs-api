import { Module } from '@nestjs/common';
import { ModerationsController } from './moderations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModerationEntity } from './moderation.entity';
import { ModerationsService } from './moderations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ModerationEntity])
  ],
  controllers: [ModerationsController],
  providers: [ModerationsService]
})
export class ModerationsModule {}
