import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuController } from './modules/menu/menu.controller';
import { MenuService } from './modules/menu/menu.service';
import { IntroService } from './modules/intro/intro.service';
import { MenuModule } from './modules/menu/menu.module';
import { IntroModule } from './modules/intro/intro.module';
import { InstallModule } from './modules/install/install.module';
import { VentajasInconvenientesModule } from './modules/pros_cons/pros_cons.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { ExtraInfoModule } from './modules/extrainfo/extrainfo.module';
import { ConclusionModule } from './modules/conclusion/conclusion.module';

@Module({
  imports: [MenuModule, IntroModule, InstallModule, VentajasInconvenientesModule,
     PropertiesModule, IntegrationsModule, ExtraInfoModule, ConclusionModule],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService, IntroService],
})
export class AppModule {}
