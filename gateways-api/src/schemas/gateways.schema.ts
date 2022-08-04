import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Device } from './devices.schema';

export type GatewayDocument = Gateway & Document;

export enum AccountState {
    on_line='On Line',
    off_line='Off Line',
};

@Schema()
export class Gateway {
  @Prop({ required: true })
  serialNumber: string;

  @Prop()
  name: string;

  @Prop()
  ipv4_address: string;

  @Prop([Device])
  devices: Device[];
}

export const GatewaySchema = SchemaFactory.createForClass(Gateway);