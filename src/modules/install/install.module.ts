import { Module } from '@nestjs/common';
import { InstallController } from './install.controller';
import { InstallService } from './install.service';

@Module({
  controllers: [InstallController],
  providers: [InstallService],
  exports: [InstallService]
})
export class InstallModule {}
