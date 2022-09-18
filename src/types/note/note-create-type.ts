import { Static, Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";
import { INoteCreate } from "../../interfaces";
import { NoteGetResponse } from "./note-get-type";

export const NoteCreateBody = Type.Object({
  isImportant: Type.Boolean(),
  deadLine: Type.String(),
  title: Type.String(),
  description: Type.String(),
});

export type NoteCreateBodyType = Static<typeof NoteCreateBody>;

export function NoteCreateBodyMapper(req: NoteCreateBodyType): INoteCreate {
  return {
    deadLine: new Date(req.deadLine),
    description: req.description,
    isImportant: req.isImportant,
    title: req.title,
  };
}

export const NoteCreateBodySchema: RouteShorthandOptions = {
  schema: {
    body: NoteCreateBody,
    response: {
      200: NoteGetResponse,
    },
  },
};
