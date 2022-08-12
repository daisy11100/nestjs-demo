/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 23:27:24
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-11 23:51:56
 * @Description:
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id): string {
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
