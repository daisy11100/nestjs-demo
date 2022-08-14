/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 23:28:14
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-12 15:35:57
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Headers,
  Query,
} from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  //查询
  @Get()
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }

  //创建
  @Post()
  creat(@Body() { message }): string {
    return this.helloService.creat(message);
  }

  //更新
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  //删除
  @Delete(':id')
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
