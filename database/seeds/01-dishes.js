exports.seed = (knex, Promise) => {
    return knex('dishes').del()
        .then(() => {
            return knex('dishes').insert([
                { id: 1, name: "Curry" },
                { id: 2, name: "Pie" }
            ])
        })
}