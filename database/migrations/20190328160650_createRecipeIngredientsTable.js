exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-ingredient', (tbl) => {
        // we must use the callback syntax for .createTable()
        tbl.increments();
        tbl
          .integer('recipe2_id', 255)
          .notNullable()
          .unique('uq_recipe2_id');
       
        tbl
        .integer('ingredient_id', 255)
        .notNullable()
        .unique('uq_ingredient_id');

        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredient');
};