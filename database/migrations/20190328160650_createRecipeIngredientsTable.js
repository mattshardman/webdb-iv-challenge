exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-ingredient', (tbl) => {
        // we must use the callback syntax for .createTable()
        tbl.increments();
        tbl
          .integer('recipe_id', 255)
          .notNullable()
       
        tbl
        .integer('ingredient_id', 255)
        .notNullable()

        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredient');
};