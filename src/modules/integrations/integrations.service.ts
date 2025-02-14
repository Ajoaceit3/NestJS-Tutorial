import { Injectable } from '@nestjs/common';

@Injectable()
export class IntegrationsService {
  getIntegration(): {} {
    return {
        head_title: 'Integraciones populares en NestJS',
        title1: '1. Swagger para documentar APIs',
        integration1: 'Swagger es una herramienta ampliamente utilizada para documentar y probar APIs de manera interactiva. NestJS proporciona soporte nativo para Swagger mediante el paquete @nestjs/swagger. Te puede proponciar las siguiente ventajas:',
        integration1_1: 'Documentación interactiva: Genera una interfaz visual donde los desarrolladores pueden explorar y probar los endpoints de la API.',
        integration1_2: 'Automatización: No es necesario escribir la documentación manualmente; se genera automáticamente a partir de los decoradores y clases definidas en el proyecto.',
        integration1_3: 'Facilita la colaboración: Permite a equipos internos o externos entender y consumir la API de forma sencilla.',
        integration1_steps: 'Pasos para integrar Swagger',
        integration1_steps1: 'Instala el paquete:',
        integration1_steps1_img: '/integration1.png', 
        integration1_steps2: 'Configura Swagger en el archivo principal (main.ts):',
        integration1_steps2_img: '/integration2.png',
        integration1_steps3: 'Accede a la documentación en http://localhost:3000/api.',
        title2: '2. Docker para contenedores',
        integration2: 'Docker es una herramienta que permite empaquetar aplicaciones y sus dependencias en contenedores, facilitando la portabilidad y el despliegue. Los principales beneficios de usar Docker con NestJS:',
        integration2_1: 'Portabilidad: El mismo contenedor puede ejecutarse en cualquier entorno que soporte Docker.',
        integration2_2: 'Consistencia: Asegura que la aplicación funcione igual en desarrollo, pruebas y producción.',
        integration2_3: 'Fácil integración con pipelines CI/CD: Simplifica la automatización de despliegues.',
        integration2_steps: 'Configuración de Docker para un proyecto NestJS',
        integration2_steps1: 'Crear un archivo Dockerfile:',
        integration2_steps1_img: '/integration3.png', 
        integration2_steps2: 'Crear un archivo docker-compose.yml (opcional):Si necesitas ejecutar otros servicios, como bases de datos, junto con NestJS:',
        integration2_steps2_img: '/integration4.png',
        integration2_steps3: 'Construir y ejecutar el contenedor:',
        integration2_steps3_img: '/integration5.png',
        title3: '3. Herramienta de monitoreo',
        integration3: 'Prometheus es una herramienta de monitoreo y alerta utilizada para registrar métricas en tiempo real, ideal para aplicaciones backend como las desarrolladas con NestJS.',
        integration3_steps: 'Pasos para integrar Prometheus',
        integration3_steps1: 'Instala el paquete:',
        integration3_steps1_img: '/integration6.png', 
        integration3_steps2: 'Configura el módulo de Prometheus:',
        integration3_steps2_img: '/integration7.png',
        integration3_steps3: 'Las métricas estarán disponibles en el endpoint /metrics, que puede ser consumido por Prometheus Server para su monitoreo.'
      };
  }
}