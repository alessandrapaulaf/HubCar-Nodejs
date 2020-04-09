
exports.up = function(knex) {
  return knex.schema.createTable('Avaliacao', function(table){
    table.increments('id').primary();
    table.string('Descricao').notNullable();
    table.string('Pontuacao').notNullable();
    table.integer('AluguelId').notNullable();

    table.foreign('AluguelId').references('id').inTable('Aluguel'); //chave estrangeira

  });
};

exports.down = function(knex) {
  
};
