import { Controller, Get, Render  } from '@nestjs/common';
import { InstallService } from './install.service';

@Controller('install')
export class InstallController {
    constructor(private readonly insallService: InstallService) {}

    @Get()
    @Render('install')
    getInstall(install: {}) {
        return this.insallService.getInstall();
    }
}
