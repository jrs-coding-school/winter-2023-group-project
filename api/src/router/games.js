const { getGamesByUser } = require('../controller/games')


const games = (app) => {

  app.get('/game/:username', getGamesByUser)

}

module.exports = games