/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const bcrypt = require('bcrypt')
  
  // Deletes ALL existing entries
  await knex('user').del()
  //Delete all game entries associated with this user
 
  await knex('user').insert([
    {
      email: 'damaristorrent@gmail.com',
      username: 'surfergirl',
      password: await bcrypt.hash('dorwssap', 10),
      dateCreated: new Date(Date.now())
    },
    {
      email: 'test@gmail.com',
      username: 'randomguy',
      password: await bcrypt.hash('kdjiwleji', 10),
      dateCreated: new Date(Date.now())
    },
    {
      email: 'test@hotmail.com',
      username: 'statTestUser',
      password: await bcrypt.hash('kdjiwleji', 10),
      dateCreated: new Date(Date.now())
    }
  ]);
};
