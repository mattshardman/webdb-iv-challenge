exports.seed = (knex, Promise) => {
    return knex('recipes').del()
        .then(() => {
            return knex('recipes').insert([
                { id: 1, name: "Tikka" },
                { id: 2, name: "Korma" },
                { id: 3, name: "Chicken pie" },
                { id: 4, name: "Steak pie" }
            ])
        })
}