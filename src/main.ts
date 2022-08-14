/*
 * @Author: duanxinxin
 * @Date: 2022-08-12 15:26:11
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-14 23:19:40
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
