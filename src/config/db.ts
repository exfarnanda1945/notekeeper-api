import { mongoose } from "@typegoose/typegoose";
import consola from "consola";

export class Db {
  static connString: String = "mongodb://localhost:27017/";
  static dbName: String = "notekeeper";

  static connect() {
    mongoose
      .connect(`${this.connString}${this.dbName}`)
      .then(() => {
        consola.success("Mongodb succes connected.");
      })
      .catch((err) => {
        consola.error("Failed to connect mongodb");
        consola.error(err);
      });
  }
}
