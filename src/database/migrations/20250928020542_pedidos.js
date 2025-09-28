/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pedidos", (table) => {
    table.increments("id").primary();
    table.date("data_pedido").notNullable();
    table
      .integer("id_cliente")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("clientes")
      .onDelete("CASCADE");
    table.decimal("valor_total", 10, 2).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pedidos");
};
