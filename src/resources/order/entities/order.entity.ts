import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  from: string;

  @Column({ type: 'varchar', length: 255 })
  to: string;

  @Column({ type: 'varchar', length: 255 })
  cargo: string;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'varchar', length: 255, default: 'Pending' })
  status: string;
}
