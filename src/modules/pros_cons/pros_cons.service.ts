import { Injectable } from '@nestjs/common';

@Injectable()
export class VentajasInconvenientesService {
  getProsCon(): {} {
    return {
      head_title: 'Ventajas e inconvenientes de NestJS',
      title1: 'Ventajas de NestJS',
      pro_title1: 'Arquitectura Modular y Escalable',
      pro1_1: 'La estructura modular de NestJS permite dividir el código en módulos bien organizados, facilitando la escalabilidad y el mantenimiento.',
      pro1_2: 'Ideal para proyectos grandes donde el equipo de desarrollo necesita trabajar en diferentes módulos sin interferir en otras partes del sistema.',
      pro_title2: 'Uso de TypeScript',
      pro2_1: 'NestJS está construido con TypeScript, lo que introduce tipado estático, mejor autocompletado y detección temprana de errores.',
      pro2_2: 'Esto reduce los problemas comunes en JavaScript, como errores tipográficos o de referencia.',
      pro_title3: 'Compatibilidad con Frameworks Existentes',
      pro3_1: 'Aunque tiene su propia estructura, NestJS está basado en Node.js y Express (o Fastify), lo que significa que puedes usar muchas bibliotecas de Node.js directamente.',
      pro_title4: 'Facilidad para Crear APIs REST y GraphQL',
      pro4_1: 'NestJS tiene soporte nativo para REST y GraphQL, con herramientas como @nestjs/graphql que facilitan la configuración de servidores GraphQL.',
      pro4_2: 'Documentación automática de APIs mediante Swagger.',
      pro_title5: 'Soporte para Microservicios y WebSockets',
      pro5_1: 'Incluye integración nativa para crear arquitecturas de microservicios y aplicaciones en tiempo real utilizando WebSockets.',
      pro5_2: 'Compatible con protocolos populares como RabbitMQ, Kafka y gRPC.',
      pro_title6: 'Comunidad y Ecosistema Creciente',
      pro6_1: 'Su popularidad ha crecido rápidamente, lo que ha llevado a una gran cantidad de recursos, tutoriales y plugins desarrollados por la comunidad.',
      pro6_2: 'La documentación oficial es clara y está bien estructurada.',
      pro_title7: 'Pruebas Integradas',
      pro7_1: 'Proporciona herramientas integradas para escribir pruebas unitarias y de integración, simplificando el desarrollo orientado a pruebas (TDD).',
      pro_title8: 'Seguridad Integrada',
      pro8_1: 'Incluye soporte para autenticación y autorización con herramientas como JWT y Passport, lo que hace que las aplicaciones sean seguras desde el inicio.',
      title2: 'Inconvenientes de NestJS',
      con_title1: 'Curva de Aprendizaje Pronunciada',
      con1_1: 'Aunque la estructura modular es una ventaja, puede resultar abrumadora para desarrolladores que no están familiarizados con frameworks similares (como Angular) o con TypeScript.',
      con1_2: 'Los conceptos de decoradores, inyección de dependencias y modularidad pueden ser difíciles de entender al principio.',
      con_title2: 'Sobrecarga Inicial',
      con2_1: 'Para aplicaciones pequeñas o simples, la configuración de NestJS puede ser excesiva comparada con otros frameworks más ligeros como Express.js.',
      con2_2: 'Requiere más código y configuraciones iniciales, lo que puede no ser ideal para prototipos rápidos.',
      con_title3: 'Dependencia en TypeScript',
      con3_1: 'Aunque TypeScript es una ventaja, también puede ser una barrera para los desarrolladores que no están familiarizados con él o que prefieren el dinamismo de JavaScript.',
      con_title4: 'Menos Flexibilidad Comparado con Express',
      con4_1: 'La estructura y convenciones estrictas de NestJS pueden no ser adecuadas para desarrolladores que prefieren un enfoque menos estructurado o más personalizado.',
      con_title5: 'Ecosistema en Desarrollo',
      con5_1: 'Aunque está creciendo rápidamente, su ecosistema aún no es tan maduro como el de frameworks más establecidos como Django (Python) o Spring Boot (Java).',
      con5_2: 'Algunos plugins o integraciones pueden no estar completamente desarrollados o carecer de soporte activo.',
      con_title6: 'Rendimiento Ligéramente Inferior a Fastify',
      con6_1: 'Si bien Express es el servidor predeterminado, NestJS también admite Fastify para mejorar el rendimiento. Sin embargo, otros frameworks ligeros pueden ser más eficientes para aplicaciones muy orientadas al rendimiento.',
      };
  }
}