const { showGamesByUsername } = require('../service/games')

exports.getGamesByUsername = async (req, res) => {
  
  try {
   
    const games = await showGamesByUsername(req.params.username)
    
    res.json(games)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}