/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("exercises", (table) => {
      table.increments("exercise_id").primary().defaultTo(1);
      table.string("type").notNullable();
      table.string("exercise").notNullable();
      table.string("description").notNullable();
      table.string("instructions").notNullable();
      table.string("image").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("exercises");
};
