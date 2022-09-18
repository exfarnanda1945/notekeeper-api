import fastify from "fastify";
import { Db } from "./config";
import { noteRoute } from "./routes";
import consola from "consola";

const PORT = 5050;
const HOST = "172.16.8.85";

function run() {
  Db.connect();

  const server = fastify({ logger: true });

  server.register(noteRoute);

  const start = async () => {
    try {
      await server.listen({ port: PORT, host: HOST });
      consola.success(
        `Server started at http://localhost:${PORT} or http://${HOST}:${PORT}`
      );
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };
  start();
}

run();
