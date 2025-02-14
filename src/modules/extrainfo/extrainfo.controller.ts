import { Controller, Get, Render} from '@nestjs/common';
import { ExtraInfoService } from './extrainfo.service';

@Controller('extrainfo')
export class ExtraInfoController {    
    constructor(private readonly extrainfoService: ExtraInfoService) {}

    @Get()
    @Render('extrainfo')
    getExraInfo(extrainfo: {}) {
        return this.extrainfoService.getExtraInfo();
    }
}

