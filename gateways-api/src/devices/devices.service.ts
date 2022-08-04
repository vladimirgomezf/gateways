import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { time } from 'console';
import { Model } from 'mongoose';
import { Device, DeviceDocument } from 'src/schemas/devices.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DevicesService {
  
  constructor(@InjectModel(Device.name) private DeviceModel: Model<DeviceDocument>) {}

  async create(createDeviceDto: CreateDeviceDto) {
    return new this.DeviceModel(createDeviceDto).save();
  }

  async findAll() {
    return this.DeviceModel.find();
  }

  async findOne(id: number) {
    return this.DeviceModel.findOne({uid: id});
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return this.DeviceModel.updateOne({uid:id}, {$set: {...UpdateDeviceDto}});
  }

  async remove(id: number) {
    return this.DeviceModel.deleteOne({uid: id});
  }
}
