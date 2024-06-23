import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    required: true,
    description: 'Export port',
    example: 'Russia',
  })
  @IsString()
  from: string;

  @ApiProperty({
    required: true,
    description: 'Destination',
    example: 'Syria',
  })
  @IsString()
  to: string;

  @ApiProperty({
    required: true,
    description: 'Grain',
    example: 'Wheat',
  })
  @IsString()
  grain: string;

  @ApiProperty({
    required: true,
    description: 'Cargo Weight',
    example: 65000,
  })
  @IsString()
  weight: number;

  stage?: number;

  status?: string;

  createdAt?: Date;
}
