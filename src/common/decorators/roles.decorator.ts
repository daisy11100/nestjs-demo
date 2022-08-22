import { SetMetadata } from '@nestjs/common';

/*
 * @Author: duanxinxin
 * @Date: 2022-08-23 00:19:00
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 00:20:39
 * @Description:
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
