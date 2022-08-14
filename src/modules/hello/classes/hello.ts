/*
 * @Author: duanxinxin
 * @Date: 2022-08-14 23:30:24
 * @LastEditors: duanxinxin
 * @LastEditTime: 2022-08-14 23:34:25
 * @Description:
 */

import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'user',
}

export class Hello {
  @ApiProperty({ example: 'Ketty', description: 'the name of cat' })
  name: string;

  @ApiProperty({ example: 1, description: 'the age of the cat' })
  age: number;

  @ApiProperty({ example: 'maine coon', description: 'the breed of the cat' })
  breed: string;

  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
