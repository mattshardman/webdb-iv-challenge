exports.seed = (knex, Promise) => {
    return knex('dish-recipe').del()
        .then(() => {
            return knex('dish-recipe').insert([
                { id: 1, dish_id: 1, recipe_id: 1 },
                { id: 2, dish_id: 1, recipe_id: 2 },
                { id: 3, dish_id: 2, recipe_id: 3 },
                { id: 4, dish_id: 2, recipe_id: 4 }
            ])
        })
}