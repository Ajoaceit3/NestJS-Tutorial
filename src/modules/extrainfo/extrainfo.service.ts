import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtraInfoService {
  getExtraInfo(): {} {
    return {
        head_title: 'Recursos adicionales para aprender y usar NestJS',
        title1: '1. Documentación oficial',
        info1: 'https://docs.nestjs.com',
        info1_1: 'Contenido destacado:',
        info1_1_1: 'Introducción y primeros pasos.',
        info1_1_2: 'Guías sobre APIs REST, GraphQL, microservicios y más.',
        info1_1_3: 'Tutoriales de integración con bases de datos y otros servicios.',
        title2: '2. Repositorios de ejemplos',
        info2_1: 'https://github.com/nestjs/nest/tree/master/sample',
        info2_1_1: 'Contiene ejemplos de aplicaciones REST, GraphQL, microservicios, WebSockets y más.',
        info2_2: 'Proyectos destacados de la comunidad:',
        info2_2_1: 'https://github.com/nestjs/awesome-nestjs',
        title3: '3. Comunidades y foros',
        info3_1: 'Discord oficial de NestJS:',
        info3_1_1: 'https://discord.com/invite/nestjs',
        info3_2: 'Stack Overflow:',
        info3_2_1: 'https://stackoverflow.com/questions/tagged/nestjs',
        info3_3: 'Subreddit de NestJS:',
        info3_3_1: 'https://www.reddit.com/r/NestJS/',
        info3_4: 'Grupos en LinkedIn:',
        info3_4_1: 'Busca grupos profesionales relacionados con NestJS para ampliar tu red y compartir conocimientos',
        title4: '4. Cursos y tutoriales',
        info5_1: 'YouTube:',
        info5_1_1: 'https://www.youtube.com/@nestjs',
        info5_1_2: 'Tutoriales de terceros con guías paso a paso.',
        info5_2: 'Plataformas de cursos:',
        info5_2_1: 'https://www.udemy.com/',
        info5_2_2: 'https://www.freecodecamp.org/',
    };
  }
}