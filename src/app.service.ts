/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 22:50:47
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-12 15:43:09
 * @Description:
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world';
  }
}
