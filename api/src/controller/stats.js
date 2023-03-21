const { showStatsByUsername } = require('../service/stats')

exports.getStatsByUsername = async (req, res) => {
  
  try {
  
    const games = await showStatsByUsername(req.params.username)
    
    res.json(games)
    

  } catch (error) {

    console.log(error)
    res.status(500).send("Internal Server Error")
  }
}