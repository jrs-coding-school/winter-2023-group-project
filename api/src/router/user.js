const { getUserByName} = require('../controller/user')


const user = (app) => {
  console.log('in the api user controller')
  app.get('/user/:username', getUserByName)

}

module.exports = user