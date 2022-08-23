/*
 * @Author: duanxinxin
 * @Date: 2022-08-23 15:10:46
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 15:28:43
 * @Description:
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('Before...');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(`After...${Date.now() - now}ms`);
      }),
    );
  }
}
