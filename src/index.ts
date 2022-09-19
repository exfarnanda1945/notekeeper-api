import fastify from "fastify";
import { Db } from "./config";
import { noteRoute } from "./routes";
import consola from "consola";
require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

function run() {
  Db.connect();

  const localPort = PORT ? parseInt(PORT) : 8080;

  const server = fastify({ logger: true });
  server.register(noteRoute);

  const start = async () => {
    try {
      await server.listen({ port: localPort, host: HOST });
      consola.success(
        `Server started at http://localhost:${localPort} or http://${HOST}:${localPort}`
      );
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };
  start();
}

run();
