const { showStatsByUser } = require('../service/stats')

exports.getStatsByUser= async (req, res) => {
  
  try {
  
    const games = await showStatsByUser(req.params.username)
    
    res.json(games)
    

  } catch (error) {

    console.log(error)
    res.status(500).send("Internal Server Error")
  }
}