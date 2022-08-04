import { Module } from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { GatewaysController } from './gateways.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gateway, GatewaySchema } from 'src/schemas/gateways.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Gateway.name, schema: GatewaySchema }])],
  controllers: [GatewaysController],
  providers: [GatewaysService]
})
export class GatewaysModule {}
