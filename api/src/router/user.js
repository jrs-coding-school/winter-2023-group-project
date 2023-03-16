const { getUserByName, getAllUsers } = require('../controller/user')


const user = (app) => {

  app.get('/user', getAllUsers)
  app.get('/user/:username', getUserByName)

}

module.exports = user