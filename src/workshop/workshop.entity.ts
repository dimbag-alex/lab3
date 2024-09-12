import { Order } from "src/orders/orders.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Workshop {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    address: string

    @OneToMany(() => Order, order => order.workshop)
    orders: Order[] 

}