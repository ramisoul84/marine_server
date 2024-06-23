import { Order } from 'src/resources/order/entities/order.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cargo')
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  grain: string;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  delivery: string;

  @Column({ type: 'int' })
  orderId: number;

  @OneToOne(() => Order, (order) => order.cargo)
  order: Order;
}
