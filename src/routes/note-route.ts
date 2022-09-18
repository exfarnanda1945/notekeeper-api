import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { NoteService } from "../services";
import {
  NoteCreateBodyMapper,
  NoteCreateBodySchema,
  NoteCreateBodyType,
  NoteGetResponseSchema,
  NoteGetResponseType,
  NoteListResponseMapper,
  NoteListResponseSchema,
  NoteListResponseType,
} from "../types";
import {
  DeleteResultResponseType,
  IdBodyType,
  DeleteResultResponseSchema,
  IdParamType,
} from "../types/general";
import {
  NoteUpdateBodySchema,
  NoteUpdateBodyType,
  NoteUpdateMapper,
} from "../types/note/note-update-type";

const service = new NoteService();
//https://stackoverflow.com/questions/55029503/which-http-method-for-updating-single-property

export const noteRoute: FastifyPluginAsync = async (
  server: FastifyInstance
) => {
  server.get<{ Reply: NoteListResponseType }>(
    "/note",
    NoteListResponseSchema,
    async (req, res) => {
      const list = await service.list();
      res.code(200).send(NoteListResponseMapper(list));
    }
  );

  server.post<{ Body: NoteCreateBodyType; Response: NoteGetResponseType }>(
    "/note",
    NoteCreateBodySchema,
    async (req, res) => {
      const body = req.body;
      const data = await service.create(NoteCreateBodyMapper(body));
      res.code(200).send(data);
    }
  );

  server.post<{ Body: IdBodyType; Response: DeleteResultResponseType }>(
    "/note/delete",
    DeleteResultResponseSchema,
    async (req, res) => {
      console.log("Request here", req.body);
      const del = await service.delete(req.body.id);
      res.code(200).send(del);
    }
  );

  server.get<{ Params: IdParamType; Response: NoteGetResponseType }>(
    "/note/:id",
    NoteGetResponseSchema,
    async (req, res) => {
      const get = await service.get(req.params.id);
      res.code(200).send(get);
    }
  );

  server.put<{ Body: NoteUpdateBodyType }>(
    "/note",
    NoteUpdateBodySchema,
    async (req, res) => {
      const data = await service.update(NoteUpdateMapper(req.body));
      console.log("here we go bois", data);
      res.code(200).send(data);
    }
  );
};
