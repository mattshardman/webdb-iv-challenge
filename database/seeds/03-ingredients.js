exports.seed = (knex, Promise) => {
    return knex('ingredients').del()
        .then(() => {
            return knex('ingredients').insert([
                { id: 1, name: "Chicken" },
                { id: 2, name: "Peppers" },
                { id: 3, name: "Coconut Milk" },
                { id: 4, name: "Steak" },
                { id: 5, name: "Leeks" }
            ])
        })
}