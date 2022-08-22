/*
 * @Author: duanxinxin
 * @Date: 2022-08-22 23:53:57
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-23 00:00:47
 * @Description:自定义parseIntPipe
 */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
