const { showStatsByUser } = require('../service/stats')

exports.getStatsByUser= async (req, res) => {
  
  try {
    console.log('in the stats controller', req.params.username)
    const games = await showStatsByUser(req.params.username)
    
    res.json(games)
    

  } catch (error) {

    console.error
    res.status(500).send("Internal Server Error")
  }
}