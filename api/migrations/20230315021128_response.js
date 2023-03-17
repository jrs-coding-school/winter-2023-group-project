/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('response', function(table) {
  
    table.increments('response_id')
      .primary()
      .unsigned()
      .notNullable()
    table.integer('game_id')
      .unsigned()
      .references('game_id')
      .inTable('game')
      .notNullable()
    table.string('question_id')
      .references('question_id')
      .inTable('question')
      .notNullable()
    table.boolean('isCorrect').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('response')
};
