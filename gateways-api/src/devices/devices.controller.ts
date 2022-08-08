import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(':uid')
  findOne(@Param('uid') uid: number) {
    return this.devicesService.findOne(+uid);
  }

  @Patch(':uid')
  update(@Param('uid') uid: number, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+uid, updateDeviceDto);
  }

  @Delete(':uid')
  remove(@Param('uid') uid: number) {
    return this.devicesService.remove(+uid);
  }
}
