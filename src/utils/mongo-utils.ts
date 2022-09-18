import mongoose from "mongoose";

export class MongoHelper {
  static convertToObjectId(id: string): mongoose.Types.ObjectId {
    return new mongoose.Types.ObjectId(id);
  }

  static convertToString(objectId: mongoose.Types.ObjectId): string {
    return new mongoose.Types.ObjectId(objectId).toString();
  }
}
