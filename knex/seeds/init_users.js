exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {email:'jyama@devleague.com', password:'password'}
            ])
        })
}