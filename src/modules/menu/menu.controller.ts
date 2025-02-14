import { Controller, Get, Render } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  @Render('menu')
  getMenu(): { menu: string[] } {
    return { menu: this.menuService.getMenu() };
  }
}

