const { showGamesByUsername, createGame } = require('../service/games')

exports.getGamesByUsername = async (req, res) => {
  
  try {
   
    const games = await showGamesByUsername(req.params.username)
    
    res.json(games)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

exports.addGame = async (req, res) => {

  console.log(req.body)

  const game = req.body
  game.user_Id = req.userId

  try {
    
    const result = await createGame(game)
    
    res.json(result)

  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }

}