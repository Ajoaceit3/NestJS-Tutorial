import { Controller, Get, Render } from '@nestjs/common';
import { ConclusionService } from './conclusion.service';

@Controller('conclusion')
export class ConclusionController {    constructor(private readonly conclusionService: ConclusionService) {}

    @Get()
    @Render('conclusion')
    getProperties(conclusion: {}) {
        return this.conclusionService.getConclusion();
    }
}

