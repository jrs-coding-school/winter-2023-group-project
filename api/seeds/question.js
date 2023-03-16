/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const data = require('./questions.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('question').del()
  await knex('question').insert(data);
};

