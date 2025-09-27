import Fastify from "fastify";
import cors from "@fastify/cors";
import knex from "knex";
import config from "../knexfile.js";
import "dotenv/config";

const fastify = Fastify({ logger: true });
const db = knex(config.development);

// ⚠️ NÃO use cors() — use cors direto
await fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

// Rota de teste
fastify.get("/clientes", async (request, reply) => {
  try {
    const clientes = await db("clientes").select("*");
    reply.code(200).send({
      message: "Lista de clientes",
      data: clientes,
      error: false,
    });
  } catch (err) {
    reply.code(500).send({
      message: "Erro ao buscar clientes",
      data: null,
      error: true,
    });
  }
});

// Inicializa o servidor
try {
  await fastify.listen({ port: process.env.PORT || 3333 });
  console.log(
    `Servidor rodando em http://localhost:${process.env.PORT || 3333}`
  );
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
