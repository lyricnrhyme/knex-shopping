
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', function(table) {
        table.increments();
        table.foreign('user_id').references('id').inTable('users').notNullable();
        table.foreign('products_id').references('id').inTable('products').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
