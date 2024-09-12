
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './clients.entity';
import { CreateClientDto } from './dto/create-client.dto';


@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientsRepository.find({ relations: {orders: true} });
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientsRepository.findOne({ where: { id }, relations: {orders: true} });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }
  
  async remove(id: number): Promise<void> {
    const client = await this.clientsRepository.findOne({where: {id}});
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    await this.clientsRepository.remove(client);
  }
}
