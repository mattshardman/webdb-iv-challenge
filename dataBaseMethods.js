const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

const getDishes = async () => {
  try {
    const dishes = await db("dishes");
    return dishes;
  } catch (e) {
    return e;
  }
};

const getDish = async id => {
  try {
    const dishes = await db({ d: "dishes" })
      .where("d.id", id)
      .select("d.id", "d.name", { recipe_name: "recipes.name " })
      .innerJoin("dish-recipe", "d.id", "dish-recipe.dish_id")
      .innerJoin("recipes", "recipes.id", "dish-recipe.recipe_id");
    return dishes;
  } catch (e) {
    return e;
  }
};

const addDish = async dish => {
  try {
    const newDish = await db.insert({ name: dish }).into("dishes");
    return newDish;
  } catch (e) {
    return e;
  }
};

const getRecipes = async () => {
  try {
    const recipes = await db({ r: "recipes" })
      .select("r.id", "r.name", { dish_name: "dishes.name" })
      .innerJoin("dish-recipe", "r.id", "dish-recipe.recipe_id")
      .innerJoin("dishes", "dishes.id", "dish-recipe.dish_id");
    return recipes;
  } catch (e) {
    return e;
  }
};

const addRecipe = async recipe => {
  try {
    const newRecipe = await db.insert(recipe).into("recipes");

    return newRecipe;
  } catch (e) {
    return e;
  }
};

getDish(1);

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  addRecipe
};
