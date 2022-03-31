import { TechniciansEntity } from 'src/technicians/entity/tecnical.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly orderId: string;

  @Column()
  createdAt: Date;

  @Column()
  attendDay: Date;

  @Column()
  customerId: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @Column()
  cost: number;

  @Column()
  technicialId: string;

  @ManyToOne(() => TechniciansEntity, (technical) => technical.orders)
  technical: TechniciansEntity;
}
