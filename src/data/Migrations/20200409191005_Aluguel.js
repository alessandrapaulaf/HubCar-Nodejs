
exports.up = function(knex) {
    return knex.schema.createTable('Aluguel', function(table){
        table.increments('id').primary();
        table.datetime('DataRetirada').notNullable();
        table.datetime('DataEntrega').notNullable();
        table.integer('CarroId').notNullable();
        table.integer('UsuarioId').notNullable();

        table.foreign('CarroId').references('id').inTable('Cars'); //chave estrangeira
        table.foreign('UsuarioId').references('id').inTable('Usuario'); //chave estrangeira


    });
};

exports.down = function(knex) {
  
};
