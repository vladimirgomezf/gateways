import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { gatewaySchema, JoiValidationPipe } from '../joi-validation.pipe';

@Controller('gateways')
export class GatewaysController {
  constructor(private readonly gatewaysService: GatewaysService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(gatewaySchema))
  create(@Body() createGatewayDto: CreateGatewayDto) {
    return this.gatewaysService.create(createGatewayDto);
  }

  @Get()
  findAll() {
    return this.gatewaysService.findAll();
  }

  @Get(':serialNumber')
  findOne(@Param('serialNumber') serialNumber: string) {
    return this.gatewaysService.findOne(serialNumber);
  }

  @Patch(':serialNumber')
  @UsePipes(new JoiValidationPipe(gatewaySchema))
  update(
    @Param('serialNumber') serialNumber: string,
    @Body() updateGatewayDto: UpdateGatewayDto,
  ) {
    return this.gatewaysService.update(serialNumber, updateGatewayDto);
  }

  @Delete(':serialNumber')
  remove(@Param('serialNumber') serialNumber: string) {
    return this.gatewaysService.remove(serialNumber);
  }
}
