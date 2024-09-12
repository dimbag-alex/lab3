// src/clients/clients.controller.ts
import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiParam, ApiTags  } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all clients' })
  @ApiResponse({ status: 200, description: 'Return all clients.', type: [Client] })
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get client by ID' })
  @ApiResponse({ status: 200, description: 'Return the client.', type: Client })
  async findOne(@Param('id') id: number): Promise<Client> {
    const client = await this.clientsService.findOne(id);
    return client;
  }

  @Post()
  @ApiOperation({ summary: 'Create client' })
  @ApiResponse({ status: 201, description: 'The client has been successfully created.', type: Client })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateClientDto })
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }

  // @Put(':id')
  // update(@Param(':id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<Client> {
  //   return this.clientsService.update(+id, updateClientDto)
  // }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete client by ID' })
  @ApiResponse({ status: 200, description: 'The client has been successfully deleted.' })
  @ApiParam({ name: 'id', description: 'Client ID' })
  remove(@Param('id') id: number): Promise<void> {
    return this.clientsService.remove(id);
  }

}
