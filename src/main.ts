/*
 * @Author: duanxinxin
 * @Date: 2022-08-12 15:26:11
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-22 23:41:17
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  //全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

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
