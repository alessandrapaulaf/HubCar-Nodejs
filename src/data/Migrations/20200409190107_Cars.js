
exports.up = function(knex) {
    return knex.schema.createTable('Cars', function(table){
        table.increments('id').primary();
        table.string('Modelo').notNullable();
        table.string('Ano',4).notNullable();
        table.string('Placa',7).notNullable();
        table.decimal('ValorDiaria').notNullable();
        table.integer('UsuarioId').notNullable();
        table.foreign('UsuarioId').references('id').inTable('Usuario'); //chave estrangeira
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cars');
};
