/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("marcas", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("site").notNullable();
    table.string("telefone").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("marcas");
};
