import { Module } from '@nestjs/common';
import { VentajasInconvenientesController } from './pros_cons.controller';
import { VentajasInconvenientesService } from './pros_cons.service';

@Module({
  controllers: [VentajasInconvenientesController],
    providers: [VentajasInconvenientesService],
    exports: [VentajasInconvenientesService]
})
export class VentajasInconvenientesModule {}
