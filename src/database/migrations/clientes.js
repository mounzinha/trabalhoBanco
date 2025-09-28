export async function up(knex) {
  return knex.schema.createTable("clientes", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable().unique();
    table.string("cidade").notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable("clientes");
}
