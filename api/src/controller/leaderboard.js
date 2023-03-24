const { showLeaderboard } = require('../service/leaderboard')

exports.getLeaderboard = async (req, res) => {
  // console.log("in the get leaderboard")
  
  try {
    const gameMode = req.query.gameMode
    const games = await showLeaderboard(gameMode)
    
    res.json(games)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}