import { Controller, Get, Param, Delete, Body, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { WorkshopService } from './workshop.service';
import { Workshop } from './workshop.entity';
import { createWorkshopDto } from './dto/create-workshop.dto';

@ApiTags('workshop')
@Controller('workshop')
export class WorkshopController {
    constructor(private readonly workshopService: WorkshopService){}

    @Post()
    @ApiOperation({ summary: 'Create workshop' })
    @ApiResponse({ status: 201, description: 'The client has been successfully created.', type: Workshop })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiBody({ type: createWorkshopDto })
    create(@Body() createClientDto: createWorkshopDto): Promise<Workshop> {
      return this.workshopService.create(createClientDto);
    }

    @Get()
    @ApiOperation({summary: "Get all workshops"})
    @ApiResponse({status: 200, description: "Return all workshops"})
    findAll():Promise<Workshop[]>{
        return this.workshopService.findAll()
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get workshop by ID' })
    @ApiResponse({ status: 200, description: 'Return the workshops.', type: Workshop })
    findOne(@Param('id') id: number): Promise<Workshop>{
        return this.workshopService.findOne(id)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete workshop by ID' })
    @ApiResponse({ status: 200, description: 'The workshop has been successfully deleted.' })
    @ApiParam({ name: 'id', description: 'Workshop ID' })
    remove(@Param('id') id: number): Promise<void> {
        return this.workshopService.remove(id);
    }

    
}
