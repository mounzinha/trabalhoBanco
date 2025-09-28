/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("itens_pedidos", (table) => {
    table.increments("id").primary();
    table
      .integer("id_pedido")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("pedidos")
      .onDelete("CASCADE");
    table
      .integer("id_produto")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("produtos")
      .onDelete("CASCADE");
    table.integer("quantidade").notNullable();
    table.decimal("preco_unitario", 10, 2).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("itens_pedidos");
};
