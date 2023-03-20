/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const data = require('./questions.json')

exports.seed = async function(knex) {
  await knex('question').insert(data);
};

