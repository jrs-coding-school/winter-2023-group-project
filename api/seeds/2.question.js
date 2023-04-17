/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const {getSeedQuestions} = require('../src/utility/utils')

exports.seed = async function(knex) {
  await knex('question').del()
  await knex('question').insert(getSeedQuestions())
}

