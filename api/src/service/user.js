const knex = require('../knex')
const bcrypt = require('bcrypt')

exports.createUser = async (userData) => {

  const {username, password} = userData

  // Hash the password with 10 rounds of salt
  const hash = await bcrypt.hash(password, 10)

  // Insert the user into the database
  await knex('user').insert({
    ...userData,
    username: username,
    password: hash //store the hash. DO NOT store a plaintext password!
  })
  return
}

exports.showUserByUsername = async (username) => {
  // Find the first user in the database with the username
const user = await knex('user').where('username', username).first()
return user
}

exports.showUserById = async (id) => {
  const user = await knex('user').where('id', id).first()
  return user
}

exports.showAllUsers = async () => {
  console.log('made it to the service')
  const user = await knex('user').select('*') 
  return user
}