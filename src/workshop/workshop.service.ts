import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from './workshop.entity';
import { Repository } from 'typeorm';
import { createWorkshopDto } from './dto/create-workshop.dto';

@Injectable()
export class WorkshopService {
    constructor(
        @InjectRepository(Workshop)
        private workshopRepository: Repository<Workshop>,
    ){}

    create(dto: createWorkshopDto): Promise<Workshop>{
        const workshop = this.workshopRepository.create(dto)
        return this.workshopRepository.save(workshop)
    }

    findAll(){
        return this.workshopRepository.find({relations: {orders: true}})
    }
    
    async findOne(id: number): Promise<Workshop> {
        const workshop = await this.workshopRepository.findOne({ where: { id }, relations: {orders: true}});
        if (!workshop) {
          throw new NotFoundException(`Workshop with ID ${id} not found`);
        }
        return workshop;

    }

    async remove(id: number): Promise<void> {
    const workshop = await this.workshopRepository.findOne({where: {id}});
    if (!workshop) {
      throw new NotFoundException(`Workshop with ID ${id} not found`);
    }
    await this.workshopRepository.remove(workshop);
    }

}
