/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.decimal("preco", 10, 2).notNullable();
    table.integer("estoque").notNullable();
    table
      .integer("id_marca")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("marcas")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("produtos");
};
