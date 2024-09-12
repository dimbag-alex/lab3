// src/orders/orders.service.ts
import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Client } from 'src/clients/clients.entity';
import { Workshop } from 'src/workshop/workshop.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>
  ) {}

  // create(createOrderDto: CreateOrderDto): Promise<Order> {
  //   const order = this.ordersRepository.create(createOrderDto);
  //   return this.ordersRepository.save(order);
  // }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { clientid, workshopid, description, date } = createOrderDto;

    // клиент по clientId
    const client = await this.clientsRepository.findOne({ where: { id: clientid } });
    if (!client) {
      throw new NotFoundException(`Client with ID ${clientid} not found`);
    }
    // мастерская по workshopid
    const workshop = await this.workshopRepository.findOne({ where: { id: workshopid } });
    if (!client) {
      throw new NotFoundException(`Client with ID ${clientid} not found`);
    }

    const order = this.ordersRepository.create({
      description,
      date,
      client,
      workshop
    });

    if (!client.orders) {
      client.orders = [];
    }
    if (!workshop.orders) {
      workshop.orders = [];
    }

    client.orders.push(order)
    this.clientsRepository.save(client)

    workshop.orders.push(order)
    this.workshopRepository.save(workshop)
    

    return this.ordersRepository.save(order);
  }

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOne({where: {id}});
  }

  async remove(id: number): Promise<void> {
    const order = await this.ordersRepository.findOne({where: {id}});
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    await this.ordersRepository.remove(order);
  }
}
