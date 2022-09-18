import { Static, Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";
import { INoteUpdate } from "../../interfaces";

export const NoteUpdateBody = Type.Object({
  isImportant: Type.Boolean(),
  deadLine: Type.String(),
  title: Type.String(),
  description: Type.String(),
  _id: Type.String(),
});

export type NoteUpdateBodyType = Static<typeof NoteUpdateBody>;

export function NoteUpdateMapper(req: NoteUpdateBodyType): INoteUpdate {
  return {
    deadLine: new Date(req.deadLine),
    description: req.description,
    isImportant: req.isImportant,
    title: req.title,
    _id: req._id,
  };
}

export const NoteUpdateBodySchema: RouteShorthandOptions = {
  schema: {
    body: NoteUpdateBody,
  },
};
