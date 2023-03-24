const { getLeaderboard } = require('../controller/leaderboard')


const leaderboard = (app) => {

  // app.get('/game/:username', getGamesByUsername)
  app.get('/leaderboard', getLeaderboard)

}

module.exports = leaderboard