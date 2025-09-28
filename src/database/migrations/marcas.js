export async function up(knex) {
  return knex.schema.createTable("marcas", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("site").notNullable();
    table.string("telefone").notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable("marcas");
}
