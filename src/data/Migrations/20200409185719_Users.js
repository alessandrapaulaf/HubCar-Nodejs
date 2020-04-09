
exports.up = function(knex) {
    return knex.schema.createTable('Users', function (table){
        table.increments('id').primary();
        table.string('Nome').notNullable();
        table.string('CPF').notNullable();
        table.string('Email');
        table.string('Senha').notNullable();
        table.string('UF',2).notNullable();
        table.string('Cidade').notNullable();
      });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Users');
};
