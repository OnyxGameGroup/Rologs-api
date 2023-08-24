import { Controller, Post, Req, Res, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModerationEntity } from './moderation.entity';
import { Repository } from 'typeorm';
import { ModerationsService } from './moderations.service';
import { Request, Response } from 'express'

interface CreateModLog {
    suspect: string;
    action: string;
    moderator: string;
    moderatorNote: string;
    date: string;
}

@Controller('moderations')
export class ModerationsController {
    constructor(private modService: ModerationsService) {}

    @Post('/create')
    async createMod(@Body() reqBody: CreateModLog, @Res() response: Response) {
        if(!reqBody.suspect || !reqBody.action || !reqBody.moderator) {
            return response.status(500).send("No content")
        }
        
        const newMod = await this.modService.createModeration({
            suspect: reqBody.suspect,
            action: reqBody.action,
            moderator: reqBody.moderator,
            moderatorNote: reqBody.moderatorNote,
            date: reqBody.date
        })
        
        return response.status(200).json(newMod)
    }
}
