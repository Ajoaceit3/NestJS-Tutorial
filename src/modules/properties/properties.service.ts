import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
  getProperties(): {} {
    return {
      head_title: 'Características principales de NestJS',
      title1: 'Soporte para APIs REST y GraphQL',
      popertie1: '1. APIs REST',
      popertie1_1: 'NestJS está diseñado para facilitar la creación de APIs RESTful de manera rápida y eficiente.',
      popertie1_2: 'Usa decoradores como @Get(), @Post() y @Delete() para definir rutas y métodos HTTP directamente en los controladores.',
      popertie1_3: 'La modularidad permite organizar las rutas en módulos independientes, lo que hace que las aplicaciones sean más escalables.',
      popertie1_4: 'Integración con herramientas como Swagger mediante el paquete @nestjs/swagger para documentar las APIs de forma automática.',
      popertie2: 'GraphQL',
      popertie2_1: 'Soporte nativo para GraphQL mediante el paquete @nestjs/graphql, que permite crear esquemas, resolvers y consultas de manera sencilla.',
      popertie2_2: 'Integración con Apollo Server para gestionar solicitudes GraphQL.',
      popertie2_3: 'Compatible con modelos de datos relacionales y no relacionales.',
      popertie2_4: 'Permite el uso de DataLoaders para mejorar el rendimiento de las consultas.',
      example: 'Ejemplo:',
      body_example1: '/properties1.png',
      title2: '2. Soporte para microservicios',
      popertie3: 'Protocolos compatibles',
      popertie3_1: 'Soporte para múltiples protocolos de comunicación entre microservicios: RabbitMQ, Kafka, gRPC, MQTT, TCP',
      popertie4: 'Facilidad de implementación',
      popertie4_1: 'Proporciona un modelo basado en eventos que permite a los microservicios comunicarse de manera eficiente mediante un patrón de publicación y suscripción.',
      popertie4_2: 'Utiliza decoradores como @MessagePattern() para definir los patrones de mensajes que un microservicio debe procesar.',
      body_example2: '/properties2.png',
      title3: '3. Arquitectura Modular',
      popertie5: 'La arquitectura modular es una de las principales fortalezas de NestJS. Permite dividir la aplicación en módulos independientes y reutilizables:',
      popertie5_1: 'Cada módulo encapsula sus propios controladores, servicios y lógica de negocio.',
      popertie5_2: 'Los módulos se registran en el módulo principal de la aplicación (AppModule), lo que permite una organización clara y escalable.',
      popertie5_3: 'Compatible con la carga diferida (lazy loading) para optimizar el rendimiento en aplicaciones grandes.',
      body_example3: '/properties3.png',
      title4: '4. Compatibilidad con middleware y decoradores personalizados',
      popertie6: 'Middleware',
      popertie6_1: 'Permite agregar lógica personalizada que se ejecuta antes de procesar una solicitud HTTP.',
      popertie6_2: 'Útil para tareas como autenticación, validación de solicitudes y logging.',
      popertie6_3: 'Los middleware se pueden registrar globalmente o en módulos específicos.',
      body_example4: '/properties4.png',
      popertie7: 'Decoradores personalizados',
      popertie7_1: 'Los desarrolladores pueden crear sus propios decoradores para simplificar tareas repetitivas o personalizar la lógica de inyección de dependencias.',
      body_example5: '/properties5.png',
      title5: '5. Testing integrado',
      popertie8: 'NestJS facilita el desarrollo de pruebas unitarias y de integración gracias a herramientas incorporadas:',
      popertie8_1: 'Usa Jest como framework de pruebas predeterminado, que permite escribir pruebas de manera eficiente.',
      popertie8_2: 'La inyección de dependencias simplifica la creación de mocks para servicios.',
      popertie8_3: 'Proporciona el módulo TestingModule para configurar el entorno de pruebas.',
      body_example6: '/properties6.png'
      };
  }
}