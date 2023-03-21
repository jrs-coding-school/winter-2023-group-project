const knex = require('../knex')

exports.showGamesByUsername = async (username) => {
  
  const userId = (await knex
  .distinct()
  .from('user')
  .pluck('user_id')
  .where ('username', username))[0]

  const games = await knex('game').where('user_id', userId)
  
  
return games
}