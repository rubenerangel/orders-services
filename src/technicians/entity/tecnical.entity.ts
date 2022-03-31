import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { OrdersEntity } from 'src/orders/entity/order.entity';

@Entity('technicians')
export class TechniciansEntity {
  @PrimaryGeneratedColumn('uuid')
  technicalId: string;

  @Column({ type: 'varchar', length: 30 })
  firstName: string;

  @Column({ type: 'varchar', length: 30 })
  lastName: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ unique: true, type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'varchar', length: 30 })
  identification: string;

  @Column({ type: 'varchar', length: 70, nullable: true })
  password: string;

  @OneToMany(() => OrdersEntity, (order) => order.technical)
  orders: OrdersEntity;

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compareSync(password, this.password);
  }
}
