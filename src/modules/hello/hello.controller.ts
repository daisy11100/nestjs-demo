/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 23:28:14
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-14 23:45:11
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

@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
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
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  //删除
  @Delete(':id')
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
