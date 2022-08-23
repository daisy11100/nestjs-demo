/*
 * @Author: duanxinxin
 * @Date: 2022-08-23 10:41:56
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 11:05:53
 * @Description:
 */
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { RoleGuardService } from './role-guard.service';
import { RolesGuard } from 'src/common/guards/guards.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@UseGuards(RolesGuard)
//局部使用守卫
@Controller('role-guard')
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  @Get()
  //自定义装饰器
  @Roles('duanxinxin')
  fetch(@Query() { user }): string {
    return this.roleGuardService.fetch(user);
  }
}
