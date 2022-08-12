/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 22:50:47
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-11 23:02:48
 * @Description:
 */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  //参数：query body params
  @Get('/app')
  getHello(@Query('name') name: string): string {
    console.log(name);
    return this.appService.getHello(name);
  }
}
