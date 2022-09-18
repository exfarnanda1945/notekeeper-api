import { getModelForClass, prop } from "@typegoose/typegoose";
import { IObjectWithTypegooseFunction } from "@typegoose/typegoose/lib/types";
import { MongoId } from "../interfaces";
import { TimeStamp } from "./timestamp-model";

export class Note extends TimeStamp {
  @prop({ required: true })
  isImportant: boolean;

  @prop({ required: true })
  deadLine: Date;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  description: string;
}

export const NoteModel = getModelForClass(Note);

export interface INoteModel
  extends Note,
    IObjectWithTypegooseFunction,
    MongoId {}
