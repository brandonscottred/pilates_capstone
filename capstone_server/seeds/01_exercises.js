/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const exercisesData = require('../seed-data/exercises');

exports.seed = async function(knex) {
  await knex('exercises').del()
  await knex('exercises').insert(exercisesData);
};
