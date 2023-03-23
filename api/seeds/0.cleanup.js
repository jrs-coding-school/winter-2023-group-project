/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('response').del()
  await knex('game').del()
  await knex('question').del()
  await knex('user').del()
};
