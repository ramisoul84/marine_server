import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/db/database.module';
import { OrderModule } from './resources/order/order.module';
import { CargoModule } from './resources/cargo/cargo.module';
import { ShipModule } from './resources/ship/ship.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    DatabaseModule,
    OrderModule,
    CargoModule,
    ShipModule,
  ],
})
export class AppModule {}
