import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';

@Controller('gateways')
export class GatewaysController {
  constructor(private readonly gatewaysService: GatewaysService) {}

  @Post()
  create(@Body() createGatewayDto: CreateGatewayDto) {
    return this.gatewaysService.create(createGatewayDto);
  }

  @Get()
  findAll() {
    return this.gatewaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('serialNumber') serialNumber: string) {
    return this.gatewaysService.findOne(+serialNumber);
  }

  @Patch(':serialNumber')
  update(@Param('serialNumber') serialNumber: string, @Body() updateGatewayDto: UpdateGatewayDto) {
    return this.gatewaysService.update(+serialNumber, updateGatewayDto);
  }

  @Delete(':serialNumber')
  remove(@Param('serialNumber') serialNumber: string) {
    return this.gatewaysService.remove(+serialNumber);
  }
}
