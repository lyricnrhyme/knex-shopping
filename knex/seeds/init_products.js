exports.seed = function(knex, Promise) {
    return knex('products').del()
        .then(function () {
            return knex('products').insert([
                {title:'Brand new updated product!', description:'Slight brand new!', inventory:4, price:100.98}
            ])
        })
}