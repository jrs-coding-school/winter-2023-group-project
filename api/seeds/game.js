/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // Deletes ALL existing entriesm
  await knex('game').del()
  
  await knex('game').insert([
    {
      user_id: 1,
      gameMode: 'Quick Play',
      score: 77,
      duration: '00:03:00',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 1,
      gameMode: '3 Strikes',
      score: 98,
      duration: '00:02:47',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 1,
      gameMode: 'Fast 25',
      score: 45,
      duration: '00:01:49',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 1,
      gameMode: '3 Strikes',
      score: 67,
      duration: '00:04:48',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 1,
      gameMode: 'Quick Play',
      score: 77,
      duration: '00:03:00',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 2,
      gameMode: '3 Strikes',
      score: 98,
      duration: '00:02:47',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 2,
      gameMode: 'Fast 25',
      score: 45,
      duration: '00:01:49',
      timestamp: new Date(Date.now())
    },
    {
      user_id: 2,
      gameMode: '3 Strikes',
      score: 67,
      duration: '00:04:48',
      timestamp: new Date(Date.now())
    },
  {
      user_id: 6,
      gameMode: 'Quick Play',
      score: 77,
      duration: '00:03:00',
      timestamp: new Date(Date.now())
  },
  {
    user_id: 6,
    gameMode: '3 Strikes',
    score: 56,
    duration: '00:02:19',
    timestamp: new Date(Date.now())
  }


  ]);
};
