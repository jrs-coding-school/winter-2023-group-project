/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('question', function(table) {
  
    table.string('question_id')
      .primary()
      .unique()
      .notNullable()
    table.string('question').notNullable()
    table.enu('difficulty', ['Easy', 'Medium', 'Hard']).notNullable()
    table.enu('category', ['Arts & Literature', 'Film & TV', 'Food & Drink',
    'General Knowledge',  'Geography',  'History', 'Music', 'Science',
    'Society & Culture', 'Sport & Leisure']).notNullable()
    table.string('correctAnswer').notNullable()
    table.string('incorrectAnswer1').notNullable()
    table.string('incorrectAnswer2').notNullable()
    table.string('incorrectAnswer3').notNullable()
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('question')
};
