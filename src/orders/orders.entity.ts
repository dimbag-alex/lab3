import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { Client } from '../clients/clients.entity';
import { Workshop } from 'src/workshop/workshop.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  date: string;

  @ManyToOne(() => Client, client => client.orders)
  client: Client;

  @ManyToOne(() => Workshop, workshop => workshop.orders)
  workshop: Workshop;
}