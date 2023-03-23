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
    table.text('question').notNullable()
    table.enu('difficulty', ['Easy', 'Medium', 'Hard']).notNullable()
    table.enu('category', ['Arts & Literature', 'Film & TV', 'Food & Drink',
    'General Knowledge',  'Geography',  'History', 'Music', 'Science',
    'Society & Culture', 'Sport & Leisure']).notNullable()
    table.text('correctAnswer').notNullable()
    table.text('incorrectAnswer1').notNullable()
    table.text('incorrectAnswer2').notNullable()
    table.text('incorrectAnswer3').notNullable()
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('question')
};
