exports.seed = (knex, Promise) => {
    return knex('recipe-ingredient').del()
        .then(() => {
            return knex('recipe-ingredient').insert([
                { id: 1, recipe_id: 1, ingredient_id: 1 },
                { id: 2, recipe_id: 1, ingredient_id: 2 },
                { id: 3, recipe_id: 1, ingredient_id: 3 },
                { id: 4, recipe_id: 2, ingredient_id: 1 },
                { id: 5, recipe_id: 2, ingredient_id: 2 },
                { id: 6, recipe_id: 3, ingredient_id: 1 },
                { id: 7, recipe_id: 3, ingredient_id: 2 },
                { id: 8, recipe_id: 3, ingredient_id: 5 },
                { id: 9, recipe_id: 4, ingredient_id: 4 },
                { id: 10, recipe_id: 4, ingredient_id: 5 },
            ])
        })
}