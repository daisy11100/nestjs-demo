/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 22:50:47
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-11 23:03:40
 * @Description:
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string): string {
    return 'Hello ' + name;
  }
}
