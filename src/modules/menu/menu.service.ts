import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  getMenu(): string[] {
    return ['Introducción', 'Características del Framework', 'Ventajas e Inconvenientes',
      'Integraciones Populares', 'Instalación', 'Recursos Adicionales', 'Conclusión'];
  }
}