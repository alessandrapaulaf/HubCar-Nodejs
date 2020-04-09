
exports.up = function(knex) {
  return knex.schema.createTable('Carteira', function(table){
    table.increments('id').primary();
    table.decimal('Saldo').notNullable();
    table.integer('UsuarioId').notNullable();

    table.foreign('UsuarioId').references('id').inTable('Usuario'); //chave estrangeira

  });
};

exports.down = function(knex) {
  
};
