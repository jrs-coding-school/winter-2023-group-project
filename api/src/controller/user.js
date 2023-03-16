const { showUserByUsername, showAllUsers } = require('../service/user')

exports.getAllUsers= async (req, res) => {
  
  try {
  
    console.log('in the controller')
    const allUsers = await showAllUsers()
    
    res.json(allUsers)
    

  } catch (error) {

    console.error
    res.status(500).send("Internal Server Error")
  }
}

exports.getUserByName= async (req, res) => {
  
  try {
  
    console.log('in the controller', req.params.username)
    const userByName = await showUserByUsername(req.params.username)
    
    res.json(userByName)
    

  } catch (error) {

    console.error
    res.status(500).send("Internal Server Error")
  }
}