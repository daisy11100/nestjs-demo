/*
 * @Author: duanxinxin
 * @Date: 2022-08-11 22:50:47
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-14 22:56:57
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
