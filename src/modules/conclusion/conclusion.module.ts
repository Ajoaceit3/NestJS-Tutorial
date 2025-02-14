import { Module } from '@nestjs/common';
import { ConclusionController } from './conclusion.controller';
import { ConclusionService } from './conclusion.service';

@Module({
  controllers: [ConclusionController],
  providers: [ConclusionService],
  exports: [ConclusionService]
})
export class ConclusionModule {}
