// src/orders/orders.controller.ts
import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './orders.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiParam, ApiTags  } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';


@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'Return all orders.', type: [Order] })
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order by ID' }) 
  @ApiResponse({ status: 200, description: 'Return the order.', type: Order })
  findOne(@Param('id') id: number): Promise<Order> {
    return this.ordersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 201, description: 'The order has been successfully created.', type: Order })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateOrderDto })
  
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete order by ID' })
  @ApiResponse({ status: 200, description: 'The order has been successfully deleted.' })
  @ApiParam({ name: 'id', description: 'Order ID' })
  remove(@Param('id') id: number): Promise<void> {
    return this.ordersService.remove(id);
  }
}
