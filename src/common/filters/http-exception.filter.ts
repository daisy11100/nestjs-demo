/*
 * @Author: duanxinxin
 * @Date: 2022-08-16 14:26:10
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-09-13 11:37:49
 * @Description:
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    //获取上下文
    const ctx = host.switchToHttp();
    // 获取响应
    const response = ctx.getResponse();
    // 获取请求
    const request = ctx.getRequest();
    // 异常状态码
    const status = exception.getStatus();
    console.log(exception);

    const exceptionRes: any = exception.getResponse();
    const { error, message } = exceptionRes;
    // 响应状态
    response.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    });
  }
}
