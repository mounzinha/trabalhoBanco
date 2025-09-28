import Fastify from "fastify";
import cors from "@fastify/cors";
import knex from "knex";
import config from "../knexfile.js";
import "dotenv/config";

// Inicializa o Fastify
const fastify = Fastify({ logger: true });

// Conecta ao banco com Knex
const db = knex(config.development);

// ✅ Registra o CORS corretamente — sem usar cors()
await fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

// Rota de exemplo: listar clientes
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

// Inicia o servidor
try {
  await fastify.listen({ port: process.env.PORT || 3333 });
  console.log(
    `Servidor rodando em http://localhost:${process.env.PORT || 3333}`
  );
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
