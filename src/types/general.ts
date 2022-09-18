import { Static, Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";

export const IdParam = Type.Object({
  id: Type.String(),
});

export type IdParamType = Static<typeof IdParam>;

export const IdBody = Type.Object({
  id: Type.String(),
});

export type IdBodyType = Static<typeof IdParam>;

export const DeleteResultResponse = Type.Object({
  acknowledged: Type.Boolean(),
  deletedCount: Type.Integer(),
});

export type DeleteResultResponseType = Static<typeof DeleteResultResponse>;

export const DeleteResultResponseSchema: RouteShorthandOptions = {
  schema: {
    body: IdBody,
    response: {
      200: DeleteResultResponse,
    },
  },
};
