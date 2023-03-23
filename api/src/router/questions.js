const { getRandomQuestion } = require('../controller/questions')


const questions = (app) => {

  // app.get('/game/:username', getGamesByUsername)
  app.get('/questions/random', getRandomQuestion)

}

module.exports = questions