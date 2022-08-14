/*
 * @Author: duanxinxin
 * @Date: 2022-08-12 15:38:36
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-12 15:41:20
 * @Description:
 */

import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
