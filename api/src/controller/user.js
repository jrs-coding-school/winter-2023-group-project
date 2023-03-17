const { showUserByUsername } = require('../service/user')

exports.getUserByName= async (req, res) => {
  
  try {
  
    console.log('in the controller', req.params.username)
    const userByName = await showUserByUsername(req.params.username)
    
    res.json(userByName)
    

  } catch (error) {

  
    res.status(500).send("Internal Server Error")
  }
}