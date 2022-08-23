/*
 * @Author: duanxinxin
 * @Date: 2022-08-23 10:42:52
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 10:57:11
 * @Description:
 */
import { Module } from '@nestjs/common';
import { RoleGuardController } from './role-guard.controller';
import { RoleGuardService } from './role-guard.service';

@Module({
  imports: [],
  controllers: [RoleGuardController],
  providers: [RoleGuardService],
})
export class RoleGuardModule {}
