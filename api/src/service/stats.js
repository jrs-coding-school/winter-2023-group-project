const knex = require('../knex')

exports.showStatsByUser = async (username) => {
  
  const userId = (await knex
    .distinct()
    .from('user')
    .pluck('user_id')
    .where ('username', username))[0]
  
  //Select game_id from game where user.user_id = game.user_id
  const games = await knex('game').select('game_id', 'gameMode', 'score', 'duration', 'timeStamp').where('user_id', userId)
  
  // console.log('games', games)
  
  //This will return an array of games
  //Array.length = gamesPlayed

  //Loop through returned game_id array and Select from response where response.game_id = game.game_id and
  

  const result = await Promise.all(games.map(async (game)=> {
    //get response where game_id = game_id
    
      game.responses = await knex('response').select('question_id', 'isCorrect').where('game_id', game.game_id)
      
      //Count the total number of responses in all games
      game.responses = await Promise.all(game.responses.map(async (response)=> {
       
        //get difficulty and category from question where question_id = response.question_id
        response.question = await knex('question').select('category', 'difficulty').where('question_id', response.question_id).first()
        return response
      }))
      return game
      // console.log('responses', game.responses)
      
  }))
  
  //Number of games played
  const gamesPlayed = result.length
  
 
  let numberResponses = 0
  let gameModes = []

  for (let i = 0; i < result.length; i++) {
     //Number of responses in all games
    numberResponses = result[i].responses.length + numberResponses
    
    //Get all of the game modes into an array by game
    // gameModes[i] = result[i].gameMode
    

    // for (let j = 0; i < result[i].responses.length; j++) {
    //   if (beenResponseLoop) {j = 0}
    //   console.log('response length', result[i].responses.length)
    //   console.log('J is', j)
    //   console.log('isCorrect', result[i].responses[j].isCorrect)
      
      
    // }
  }
  console.log('number of responses', numberResponses)
  // console.log(gameModes[1])
  console.log('number of games played', gamesPlayed)
 
  



  return gamesPlayed


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

