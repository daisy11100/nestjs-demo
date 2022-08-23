/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 23:27:24
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 19:33:12
 * @Description:
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id): string {
    // 局部异常处理
    // throw new HttpException(
    //   { errcode: 10000, errmsg: '您无权访问' },
    //   HttpStatus.FORBIDDEN,
    // );
    return `hello world ${id}`;
  }

  creat(message): string {
    return `set hello done, ${message}`;
  }

  update(id, message): string {
    return `update hello done, ${id}:${message}`;
  }

  remove(id): string {
    return `remove hello done, ${id}`;
  }
}
