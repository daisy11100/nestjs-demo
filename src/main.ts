/*
 * @Author: duanxinxin
 * @Date: 2022-08-12 15:26:11
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 19:32:03
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  //全局过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe());

  //设置swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-demo api document')
    .setDescription('nest-demo project api document')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
