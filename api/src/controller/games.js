const { showGamesByUser } = require('../service/games')

exports.getGamesByUser= async (req, res) => {
  
  try {
   
    const games = await showGamesByUser(req.params.username)
    
    res.json(games)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}