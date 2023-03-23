/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('game', function(table) {
  
    table.increments('game_id')
      .primary()
      .unsigned()
      .notNullable()
    table.integer('user_id')
      .unsigned()
      .references('user_id')
      .inTable('user')
      .notNullable()
    table.enu('gameMode', ['Quick Play', '3 Strikes', 'Fast 25']).notNullable()
    table.integer('score').notNullable()
    table.time('duration').notNullable()
    table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('game')
};
