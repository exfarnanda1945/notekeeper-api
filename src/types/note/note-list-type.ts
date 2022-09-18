import { Static, Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";
import { INote } from "../../interfaces";

export const NoteListResponse = Type.Array(
  Type.Object({
    _id: Type.String(),
    isImportant: Type.Boolean(),
    deadLine: Type.String({ format: "date-time" }),
    title: Type.String(),
    description: Type.String(),
    createdAt: Type.String({ format: "date-time" }),
    updateAt: Type.Optional(Type.String({ format: "date-time" })),
  })
);

export type NoteListResponseType = Static<typeof NoteListResponse>;

export const NoteListResponseSchema: RouteShorthandOptions = {
  schema: {
    response: {
      200: NoteListResponse,
    },
  },
};

export function NoteListResponseMapper(data: INote[]): NoteListResponseType {
  return data.map((item) => ({
    _id: item._id,
    createdAt: item.createdAt.toISOString(),
    deadLine: item.deadLine.toISOString(),
    description: item.description,
    isImportant: item.isImportant,
    title: item.title,
    updateAt: item.updatedAt ? item.updatedAt.toISOString() : undefined,
  }));
}
