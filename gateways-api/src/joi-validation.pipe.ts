import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from 'joi'

@Injectable()
export class JoiValidationPipe implements PipeTransform{
  constructor(private schema: ObjectSchema){}

  transform(value: Record<string, any>) {
    const {error} = this.schema.validate(value);
    if (error) {
      console.error(error);
      throw new BadRequestException({
        error: "Validation Faled!",
        message: error.message.replace(/(\"|\[\d\])/g, "")
      })
    }
    return value;
  }
}


import { Device } from "./schemas/devices.schema";

const Joi = require('joi');

export const gatewaySchema = Joi.object({
  serialNumber: Joi.string().alphanum().min(0).max(30).required(),

  name: Joi.string().min(0).max(50),

  ipv4_address: Joi.string().ip({
    version: [
      'ipv4'
    ],
  }),

  devices: Joi.array().max(10)
});
