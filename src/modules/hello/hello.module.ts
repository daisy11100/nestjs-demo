/*
 * @Author: duanxinxin
 * @Date: 2022-08-12 15:38:36
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-09-13 17:04:11
 * @Description:
 */

import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { APP_FILTER } from '@nestjs/core';
import { HelloService } from './hello.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
