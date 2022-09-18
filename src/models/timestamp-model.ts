import { prop } from "@typegoose/typegoose";

export class TimeStamp {
  @prop({ required: true })
  createdAt: Date;

  @prop()
  updatedAt: Date;
}
