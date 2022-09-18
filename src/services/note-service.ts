import { INote, INoteCreate, INoteUpdate } from "../interfaces";
import { DeleteResult } from "../interfaces/general";
import { NoteMapper } from "../mapper";
import { NoteModel } from "../models";
import { MongoHelper } from "../utils";

export class NoteService {
  async create(data: INoteCreate): Promise<INote> {
    try {
      const note = await NoteModel.create({
        ...data,
        createdAt: new Date(),
        updatedAt: null,
      });
      await note.save();
      return NoteMapper.mapToGet(note);
    } catch (error) {
      throw error;
    }
  }

  async update(data: INoteUpdate) {
    try {
      const find = await this.get(data._id);

      if (!find) {
        throw new Error(`Data dengan id ${data._id} tidak ditemukan`);
      } else {
        find.isImportant = data.isImportant;
        find.deadLine = data.deadLine;
        find.title = data.title;
        find.description = data.description;
        find.updatedAt = new Date();

        find.save();

        return find;
      }

      // return await NoteModel.findByIdAndUpdate(
      //   data._id,
      //   {
      //     ...data,
      //     updateAt: new Date(),
      //   },
      //   { new: true },
      //   (err, doc) => {
      //     if (!doc) {
      //       throw err;
      //     } else {
      //       return doc;
      //     }
      //   }
      // );
    } catch (error) {
      return error;
    }
  }

  async list(): Promise<INote[]> {
    try {
      return await NoteModel.find();
    } catch (error) {
      throw error;
    }
  }

  async get(id: string) {
    try {
      return await NoteModel.findById({
        _id: MongoHelper.convertToObjectId(id),
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<DeleteResult> {
    try {
      return await NoteModel.deleteOne({
        _id: MongoHelper.convertToObjectId(id),
      });
    } catch (error) {
      throw error;
    }
  }
}
