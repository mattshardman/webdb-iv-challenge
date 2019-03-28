const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const getDishes = async () => {
    const dishes = await db('dishes');
    return dishes
}

const getDish = async (id) => {
    const dishes = await db('dishes').where({ id });
    return dishes;
}

const addDish = async (dish) => {
    const newDish = await db
        .insert({ name: dish })
        .into('dishes');
    return newDish;
}

const getRecipes = async () => {
    const recipes = await db({ r: 'recipes' })
        .select(
            'r.id', 
            'r.name', 
            { dish_name: 'dishes.name' }
        )
        .innerJoin('dish-recipe', 'r.id', 'dish-recipe.recipe_id')
        .innerJoin('dishes', 'dishes.id', 'dish-recipe.dish_id')
    return recipes;
}



getRecipes();
