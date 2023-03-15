exports.up = (knex) => {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('email').notNullable().unique()
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('user')
}