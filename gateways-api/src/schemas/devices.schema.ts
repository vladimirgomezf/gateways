import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

export enum AccountState {
    on_line='On Line',
    off_line='Off Line',
};

@Schema()
export class Device {
  @Prop({ required: true })
  uid: number;

  @Prop()
  provider: string;

  @Prop()
  creation_date: string;

  @Prop()
  state: AccountState;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);