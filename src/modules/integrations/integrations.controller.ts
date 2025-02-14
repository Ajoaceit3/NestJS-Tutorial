import { Controller, Get, Render } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';

@Controller('integrations')
export class IntegrationsController {
    constructor(private readonly integrationsService: IntegrationsService) {}

    @Get()
    @Render('integrations')
    getIntro(integration: {}) {
        return this.integrationsService.getIntegration();
    }
    
}
