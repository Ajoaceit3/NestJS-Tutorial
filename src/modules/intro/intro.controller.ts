import { Controller, Get, Render } from '@nestjs/common';
import { IntroService } from './intro.service';

@Controller('intro')
export class IntroController {
    constructor(private readonly introService: IntroService) {}

    @Get()
    @Render('intro')
    getIntro(intro: {}) {
        return this.introService.getIntro();
    }
}
