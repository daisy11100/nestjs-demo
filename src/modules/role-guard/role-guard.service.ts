/*
 * @Author: duanxinxin
 * @Date: 2022-08-23 10:42:23
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 10:46:48
 * @Description:
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleGuardService {
  fetch(id): string {
    return `hello,${id}`;
  }
}
