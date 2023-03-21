const { getGamesByUsername } = require('../controller/games')


const games = (app) => {

  app.get('/game/:username', getGamesByUsername)

}

module.exports = games