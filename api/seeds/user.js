/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {
      user_id: 1,
      email: 'damaristorrent@gmail.com',
      username: 'surfergirl',
      password: 'dorwssap',
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 2,
      email: 'test@gmail.com',
      username: 'randomguy',
      password: 'kdjiwleji',
      dateCreated: new Date(Date.now())
    }
  ]);
};
