/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const bcrypt = require('bcrypt')
  
  // Deletes ALL existing entries
  await knex('user').del()
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
    }
  ]);
};
