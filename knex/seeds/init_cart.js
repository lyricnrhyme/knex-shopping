exports.seed = function(knex, Promise) {
    return knex('cart').del()
        .then(function () {
            return knex('cart').insert([
            ])
        })
}