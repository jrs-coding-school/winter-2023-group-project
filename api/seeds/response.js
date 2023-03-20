/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // Deletes ALL existing entries
  await knex('response').del()

 
  await knex('response').insert([
    {
      game_id: 6,
      question_id: '622a1c347cc59eab6f94fa79',
      isCorrect: true
      
    },

    {
      game_id: 6,
      question_id: '622a1c347cc59eab6f94fba6',
      isCorrect: false
    }

    {
      game_id: 16,
      question_id: '622a1c347cc59eab6f94fba6',
      isCorrect: false
    },
    
    {
      game_id: 16,
      question_id: '622a1c377cc59eab6f95050f',
      isCorrect: true
    },

    {
      game_id: 16,
      question_id: '622a1c367cc59eab6f9502f5',
      isCorrect: true
    },
    
    {
      game_id: 16,
      question_id: '622a1c347cc59eab6f94f8d1',
      isCorrect: false
    },

    
    {
      game_id: 16,
      question_id: '622a1c3c7cc59eab6f9517e3',
      isCorrect: false
    },
    
    {
      game_id: 16,
      question_id: '622a1c357cc59eab6f94ff61',
      isCorrect: true
    },
    {
      game_id: 17,
      question_id: '622a1c387cc59eab6f950ba8',
      isCorrect: false
    },
    {
      game_id: 17,
      question_id: '622a1c357cc59eab6f94fe35',
      isCorrect: true
    },
    {
      game_id: 17,
      question_id: '622a1c377cc59eab6f950570',
      isCorrect: true
    },
 
    {
      game_id: 17,
      question_id: '623742d1cb85f7ce9e949df4',
      isCorrect: false
    }

  
  ]);
};
