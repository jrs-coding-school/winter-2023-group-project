const { getUserByName} = require('../controller/user')


const user = (app) => {

  app.get('/user/:username', getUserByName)

}

module.exports = user