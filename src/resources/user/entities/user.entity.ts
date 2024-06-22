import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  department: string;

  @Column({ type: 'timestamptz' })
  createdAt?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  lastLoginAt?: Date;
}
