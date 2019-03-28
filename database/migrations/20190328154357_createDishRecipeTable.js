exports.up = function(knex, Promise) {
    return knex.schema.createTable('dish-recipe', (tbl) => {
        // we must use the callback syntax for .createTable()
        tbl
          .integer('dish_id', 255)
          .notNullable()
          .unique('uq_dish_id');
        tbl
          .integer('recipe_id', 255)
          .notNullable()
          .unique('uq_recipe_id');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dish-recipe');
};