/*
 * @Author: duanxinxin
 * @Date: 2022-08-23 00:16:29
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 00:27:51
 * @Description:
 */
import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request.query;

    return !!roles.find((role) => role === user);
  }
}
