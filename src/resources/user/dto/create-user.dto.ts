import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    required: true,
    description: 'First Name',
    example: 'Ivan',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    required: true,
    description: 'Last Name',
    example: 'Ivanov',
  })
  @IsString()
  lasttName: string;

  @ApiProperty({
    required: true,
    description: 'Email',
    example: 'ivan92@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
    description: 'password',
    example: 'ivan1992',
  })
  @MinLength(8, { message: 'Password must have at least 8 characters.' })
  @IsString()
  password: string;

  @ApiProperty({
    required: true,
    description: 'Last Name',
    example: 'Ivanov',
  })
  @IsString()
  department: string;
}
