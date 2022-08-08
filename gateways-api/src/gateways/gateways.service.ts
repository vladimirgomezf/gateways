import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { Gateway, GatewayDocument } from 'src/schemas/gateways.schema';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';

@Injectable()
export class GatewaysService {
  constructor(
    @InjectModel(Gateway.name) private GatewayModel: Model<GatewayDocument>,
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
}
