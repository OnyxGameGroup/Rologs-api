import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ModerationEntity } from './moderation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModerationsService {
    constructor(
        @InjectRepository(ModerationEntity)
        private modRepo: Repository<ModerationEntity>,
    ) {}

    async createModeration(modlog): Promise<ModerationEntity> {
        const {
            suspect,
            action,
            moderator,
            moderatorNote,
            date
        } = modlog

        return this.modRepo.create({
            suspect,
            action,
            moderator,
            moderatorNote,
            date
        })
    }
}
