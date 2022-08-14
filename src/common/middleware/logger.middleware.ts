/*
 * @Author: duanxinxin
 * @Date: 2022-08-14 23:56:43
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-14 23:59:52
 * @Description:
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    next();
  }
}
