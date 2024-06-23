import { Cargo } from 'src/resources/cargo/entities/cargo.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  from: string;

  @Column({ type: 'varchar', length: 255 })
  to: string;

  @Column({ type: 'varchar', length: 255 })
  grain: string;

  @Column({ type: 'int', default: 1 })
  stage: number;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'varchar', length: 255, default: 'Pending' })
  status: string;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @OneToOne(() => Cargo, (cargo) => cargo.order)
  cargo: Cargo;
}
