/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const bcrypt = require('bcrypt')
  
  //Delete all game entries associated with this user
 
  await knex('user').insert([
    {
      user_id: 1,
      email: 'damaristorrent@gmail.com',
      username: 'surfergirl',
      password: await bcrypt.hash('dorwssap', 10),
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 2,
      email: 'test@gmail.com',
      username: 'randomguy',
      password: await bcrypt.hash('kdjiwleji', 10),
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 6,
      email: 'test@hotmail.com',
      username: 'statTestUser',
      password: await bcrypt.hash('kdjiwleji', 10),
      dateCreated: new Date(Date.now())
    }
  ]);
};
