import { ApiProperty } from '@nestjs/swagger';

export class CreateCargoDto {
  @ApiProperty({
    required: true,
    description: 'Grain',
    example: 'Wheat',
  })
  grain: string;

  @ApiProperty({
    required: true,
    description: 'Weight',
    example: '34000',
  })
  weight: number;

  @ApiProperty({
    required: true,
    description: 'Date',
    example: '2024-06-23T08:13:30.488Z',
  })
  date: Date;
  @ApiProperty({
    required: true,
    description: 'Price',
    example: '1200',
  })
  price: number;

  @ApiProperty({
    required: true,
    description: 'Delivery by',
    example: 'Train',
  })
  delivery: string;

  @ApiProperty({
    required: true,
    description: 'Order Id',
    example: 1,
  })
  orderId: number;
}
