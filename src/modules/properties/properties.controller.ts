import { Controller, Get, Render } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
    constructor(private readonly propertiesService: PropertiesService) {}

    @Get()
    @Render('properties')
    getProperties(properties: {}) {
        return this.propertiesService.getProperties();
    }
}
