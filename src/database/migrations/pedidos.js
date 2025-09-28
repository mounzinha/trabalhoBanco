export async function up(knex) {
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
}

export async function down(knex) {
  return knex.schema.dropTable("pedidos");
}
