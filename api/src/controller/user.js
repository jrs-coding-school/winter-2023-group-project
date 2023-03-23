const { showUserByUsername } = require('../service/user')

exports.getUserByUsername= async (req, res) => {
  
  try {

    const userByName = await showUserByUsername(req.params.username)
    
    res.json(userByName)
    

  } catch (error) {

  
    res.status(500).send("Internal Server Error")
  }
}