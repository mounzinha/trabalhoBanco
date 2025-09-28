/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("itens_pedidos").del();

  await knex("itens_pedidos").insert([
    { id_pedido: 1, id_produto: 3, quantidade: 1, preco_unitario: 7299 },
    { id_pedido: 1, id_produto: 4, quantidade: 1, preco_unitario: 4599 },
    { id_pedido: 2, id_produto: 5, quantidade: 1, preco_unitario: 7599 },
    { id_pedido: 2, id_produto: 6, quantidade: 1, preco_unitario: 5999 },
    { id_pedido: 3, id_produto: 10, quantidade: 1, preco_unitario: 6599 },
    { id_pedido: 3, id_produto: 11, quantidade: 1, preco_unitario: 5899 },
    { id_pedido: 4, id_produto: 13, quantidade: 1, preco_unitario: 3999 },
    { id_pedido: 4, id_produto: 14, quantidade: 1, preco_unitario: 1299 },
  ]);
}
