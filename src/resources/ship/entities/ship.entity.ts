import { Order } from 'src/resources/order/entities/order.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ship')
export class Ship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  shipCapacity: number;

  @Column({ type: 'timestamptz' })
  dateBroker: Date;

  @Column({ type: 'timestamptz' })
  dateOwner: Date;

  @Column({ type: 'int' })
  bid: number;

  @Column({ type: 'int' })
  demurrage: number;

  @Column({ type: 'boolean' })
  russianFlag: boolean;

  @Column({ type: 'int' })
  loadingWeight: number;

  @Column({ type: 'varchar', length: 255 })
  from: string;

  @Column({ type: 'varchar', length: 255 })
  to: string;

  @Column({ type: 'int' })
  orderId: number;

  @OneToOne(() => Order, (order) => order.cargo)
  order: Order;
}
