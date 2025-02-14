import { Module } from '@nestjs/common';
import { ExtraInfoController } from './extrainfo.controller';
import { ExtraInfoService } from './extrainfo.service';

@Module({
  controllers: [ExtraInfoController],
    providers: [ExtraInfoService],
    exports: [ExtraInfoService]
})
export class ExtraInfoModule {}
