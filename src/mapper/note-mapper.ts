import { INote } from "../interfaces";
import { INoteModel } from "../models";
import { MongoHelper } from "../utils";

export class NoteMapper {
  static mapToGet(data: INoteModel): INote {
    return {
      _id: MongoHelper.convertToString(data._id),
      createdAt: data.createdAt,
      deadLine: data.deadLine,
      description: data.description,
      isImportant: data.isImportant,
      title: data.title,
      updatedAt: data.updatedAt,
    };
  }
}
