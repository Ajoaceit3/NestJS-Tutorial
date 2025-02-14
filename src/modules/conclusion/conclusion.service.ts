import { Injectable } from '@nestjs/common';

@Injectable()
export class ConclusionService {
  getConclusion(): {} {
    return {
      head_title: 'Conclusiones de NestJS',
      conclusion1: 'NestJS es más fácil de abordar para desarrolladores con experiencia previa en frameworks similares (como Angular) o en programación orientada a objetos. Sin embargo, para aquellos que vienen de entornos más simples como Express.js, la transición puede ser desafiante.',
      conclusion2: 'A pesar de ello, su curva de aprendizaje se justifica por las buenas prácticas y patrones que introduce, convirtiéndose en una inversión valiosa para proyectos a largo plazo.',
      conclusion3: 'En lo que a proyecciñón se refiere, NestJS sigue ganando popularidad gracias a su enfoque en la escalabilidad y su alineación con tecnologías modernas. A medida que más empresas adoptan arquitecturas basadas en microservicios y APIs avanzadas, NestJS está bien posicionado para convertirse en el estándar de facto para el desarrollo backend en Node.js',
      conclusion4: 'Con una comunidad activa y un ecosistema en constante expansión, el futuro de NestJS parece prometedor. Es probable que veamos más integraciones, mejoras en el rendimiento y herramientas que faciliten aún más su adopción.',
      };
  }
}