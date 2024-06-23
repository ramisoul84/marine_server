import { ApiProperty } from '@nestjs/swagger';

export class CreateShipDto {
  @ApiProperty({
    required: true,
    description: 'Ship Capacity',
    example: 38000,
  })
  shipCapacity: number;

  @ApiProperty({
    required: true,
    description: 'Agreement Date with Broker',
    example: '2024-06-23T08:13:30.488Z',
  })
  dateBroker: Date;

  @ApiProperty({
    required: true,
    description: 'Agreement Date with Owner',
    example: '2024-06-23T08:13:30.488Z',
  })
  dateOwner: Date;

  @ApiProperty({
    required: true,
    description: 'Bid',
    example: 10000,
  })
  bid: number;

  @ApiProperty({
    required: true,
    description: 'Demurrage',
    example: 50000,
  })
  demurrage: number;

  @ApiProperty({
    required: true,
    description: 'is Russian flag',
    example: false,
  })
  russianFlag: boolean;

  @ApiProperty({
    required: true,
    description: 'Loading Weight',
    example: 20000,
  })
  loadingWeight: number;

  @ApiProperty({
    required: true,
    description: 'Charging Port',
    example: 'St. Peter',
  })
  from: string;

  @ApiProperty({
    required: true,
    description: 'Discharging Port',
    example: 'Latakia',
  })
  to: string;
}
