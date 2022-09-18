import { ITimeStamp } from "./timestamp";

export interface INote extends ITimeStamp {
  _id: string;
  isImportant: boolean;
  deadLine: Date;
  title: string;
  description: string;
}

export interface INoteUpdate extends Omit<INote, "createdAt" | "updatedAt"> {}

export interface INoteCreate extends Omit<INoteUpdate, "_id"> {}
