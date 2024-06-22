import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './resources/user/user.module';
import { DatabaseModule } from './modules/db/database.module';
import { OrderModule } from './resources/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    DatabaseModule,
    UserModule,
    OrderModule,
  ],
})
export class AppModule {}
