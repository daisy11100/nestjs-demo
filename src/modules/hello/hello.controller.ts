/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 23:28:14
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-09-13 17:07:57
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
  ParseIntPipe,
  UseInterceptors,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { Hello, UserRole } from './classes/hello';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
@UseInterceptors(LoggingInterceptor)
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  //查询
  @Get()
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: 'get...',
    type: Hello,
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
    // throw new ForbiddenException();
  }

  //创建
  @Post()
  @ApiBody({ description: '更新内容' })
  creat(@Body() { message }): string {
    return this.helloService.creat(message);
  }

  //更新
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '输入message' })
  //通过管道对数据进行处理（这里用到了nest自带的管道）
  update(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
    console.log(typeof id);
    return this.helloService.update(id, message);
  }

  //删除
  @Delete(':id')
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
