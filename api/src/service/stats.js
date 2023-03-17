const knex = require('../knex')

exports.showStatsByUser = async (username) => {
  
  console.log('in the stats service')
  const userId =  await knex('user').where('username', username)
  
  //Select game_id from game where user.user_id = game.user_id
  const games = await knex('game').select('game_id', 'gameMode', 'score', 'duration', 'timeStamp').where('user_id', userId)
  //This will return an array of games
  //Array.length = gamesPlayed

  //Loop through returned game_id array and Select from response where response.game_id = game.game_id and

  games.forEach(async (game)=> {
    //get response where game_id = game_id
      game.responses = await knex('response').select('question_id', 'isCorrect').where('game_id', game.game_id)
      game.responses.forEach(async (response)=> {
        //get difficulty and category from question where question_id = response.question_id
        response.question = await knex('question').select('category', 'difficulty').where('question_id', response.question_id).first()
      })
  
  })

  console.log(games)
  
  return games


  //isCorrect = true
  //correctAnswerPct = count of responses and multiply by .isCorrect 

  // const games = [
  //   {
  //     game_id,
  //     gameMode, 
  //     score,
  //     duration,
  //     timeStamp,
  //     responses: [
  //       {
  //         isCorrect,
  //         question:{
  //           difficulty,
  //           category
  //         }
  //       }
  //     ]
  //   }
  // ]
  
}

