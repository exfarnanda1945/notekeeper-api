import { Static, Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";
import { INote } from "../../interfaces";

export const NoteGetResponse = Type.Object({
  _id: Type.String(),
  isImportant: Type.Boolean(),
  deadLine: Type.String({ format: "date-time" }),
  title: Type.String(),
  description: Type.String(),
  createdAt: Type.String({ format: "date-time" }),
  updateAt: Type.Optional(Type.String({ format: "date-time" })),
});

export type NoteGetResponseType = Static<typeof NoteGetResponse>;

export function NoteGetResponseMapper(data: INote): NoteGetResponseType {
  return {
    _id: data._id,
    createdAt: data.createdAt.toISOString(),
    deadLine: data.deadLine.toISOString(),
    description: data.description,
    isImportant: data.isImportant,
    title: data.title,
    updateAt: data.updatedAt ? data.updatedAt.toISOString() : undefined,
  };
}

export const NoteGetResponseSchema: RouteShorthandOptions = {
  schema: {
    response: {
      200: NoteGetResponse,
    },
  },
};
