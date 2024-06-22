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
    description: 'Cargo',
    example: 'Wheat',
  })
  @IsString()
  cargo: string;

  @ApiProperty({
    required: true,
    description: 'Cargo Weight',
    example: 65000,
  })
  @IsString()
  weight: number;

  @ApiProperty({
    required: true,
    description: 'Status',
    example: 'Pending',
  })
  @IsString()
  status: string;
}
