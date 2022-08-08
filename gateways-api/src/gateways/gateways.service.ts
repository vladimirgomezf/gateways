import { Injectable, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gateway, GatewayDocument } from 'src/schemas/gateways.schema';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { Device, DeviceDocument } from '../schemas/devices.schema';

@Injectable()
export class GatewaysService {
  constructor(
    @InjectModel(Gateway.name) private GatewayModel: Model<GatewayDocument>,
    @InjectModel(Device.name) private DeviceModel: Model<DeviceDocument>
  ) {}

  async create(createGatewayDto: CreateGatewayDto) {
    return new this.GatewayModel(createGatewayDto).save();
  }

  async findAll() {
    return this.GatewayModel.find();
  }

  async findOne(serialNumber: string) {
    return this.GatewayModel.findOne({ serialNumber });
  }

  async update(serialNumber: string, updateGatewayDto: UpdateGatewayDto) {
    return this.GatewayModel.updateOne(
      { serialNumber },
      { $set: { ...UpdateGatewayDto } },
    );
  }

  async remove(serialNumber: string) {
    return this.GatewayModel.deleteOne({ serialNumber });
  }

  async asignDevice(serialNumber: string, uid: number) {
    const gate = await this.GatewayModel.findOne({ serialNumber });
    console.log("Gate: " + gate);
    const dev = await this.DeviceModel.findOne({ uid })
    console.log("Device: " + dev);
    gate.devices.push(dev);
    gate.save();
    console.log("Final Gate: " + gate);
  }
}
