import { Injectable } from '@nestjs/common';

@Injectable()
export class IntroService {
  getIntro(): {} {
    return {
      title: 'Introduccion a NestJS',
      question1: '¿Para qué sirve?',
      answer1: 'NestJS es un framework para construir aplicaciones del lado del servidor escalables y mantenibles.'+
          'Es especialmente útil para desarrollar APIs backend robustas, aplicaciones web y microservicios.'+
          'Proporciona una arquitectura modular y basada en controladores que facilita la organización y reutilización'+
          'del código, y utiliza principios de programación orientada a objetos (OOP), funcional (FP) y reactiva (RP).',
      question2: '¿Qué aplicaciones tiene?',
      answer2: 'NestJS se utiliza para:'+
          'APIs RESTful: Crear APIs para aplicaciones web, móviles o servicios de backend.'+
          'GraphQL: Desarrollar servidores GraphQL para consultas eficientes y flexibles.'+
          'Microservicios: Implementar arquitecturas de microservicios con soporte nativo para tecnologías como RabbitMQ, Kafka, gRPC, MQTT, entre otros.'+
          'WebSockets: Construir aplicaciones en tiempo real, como chats o dashboards en vivo.'+
          'Server-Side Rendering (SSR): Integrarse con herramientas como Angular Universal para aplicaciones que requieren renderizado del lado del servidor.'+
          'Aplicaciones monolíticas o distribuidas: Flexibilidad para aplicaciones pequeñas o sistemas complejos.',
      question3: '¿Sobre qué lenguajes se apoya?',
      answer3: 'NestJS está escrito en TypeScript, aunque también es compatible con JavaScript. Aprovecha las características modernas de TypeScript, como tipado estático y decoradores, para proporcionar una experiencia de desarrollo más robusta.'+
          'Internamente se basa en:'+
          'Node.js: Usa el runtime de Node.js como base para la ejecución de JavaScript en el servidor.'+
          'Express.js: Por defecto, utiliza Express como servidor HTTP, aunque también es compatible con Fastify para mejorar el rendimiento.',
      question4: '¿Qué prerrequisitos necesita?',
      answer4: 'Conocimientos previos:'+
          'JavaScript y TypeScript: Entender las bases de programación en estos lenguajes.'+
          'Node.js: Familiaridad con el entorno de ejecución de Node.js.'+
          'Conceptos de programación backend: Rutas, controladores, middleware y bases de datos.'+
          'Herramientas instaladas:'+
          'Node.js: Versión LTS o superior instalada en tu máquina.'+
          'npm o yarn: Un gestor de paquetes para instalar dependencias.'+
          'Editor de código: Visual Studio Code es altamente recomendado.'+
          'Opcional: Docker (para entornos de desarrollo más avanzados).'+
          'Bibliotecas de terceros (según el proyecto):'+
          'Módulos como @nestjs/typeorm para bases de datos, @nestjs/graphql para GraphQL, o herramientas específicas según tus necesidades.',
      imageUrl: '/nest.png', 
      };
  }
}