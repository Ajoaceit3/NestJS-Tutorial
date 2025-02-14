import { Controller, Get, Render } from '@nestjs/common';
import { VentajasInconvenientesService } from './pros_cons.service';

@Controller('pros_cons')
export class VentajasInconvenientesController {
   constructor(private readonly prosConService: VentajasInconvenientesService) {}

    @Get()
    @Render('pros_cons')
    getIntro(pros_cons: {}) {
        return this.prosConService.getProsCon();
    }
}
   