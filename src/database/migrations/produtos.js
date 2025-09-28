export async function up(knex) {
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
}

export async function down(knex) {
  return knex.schema.dropTable("produtos");
}
