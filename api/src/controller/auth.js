const { createUser, showUserByUsername  } = require('../service/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const userData = req.body

    await createUser(userData)
    
    // Create a JWT and send it back to the client
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY)
    return res.json({ token })

  } catch (error) {
    console.log(error)

    if(error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({message: "Account already exists"})
    }

    return res.status(500).json({message: "Internal Server Error"})
  }
}

exports.login = async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({ message: 'Invalid authorization header' })
  }

  const credentials = Buffer.from(authHeader.slice(6), 'base64').toString().split(':')
  const [username, password] = credentials

  const user = await showUserByUsername(username)

  // If the user isn't found or the password is incorrect, return an error
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' })
  }

  // Create a JWT and send it back to the client
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY)
  res.json({ token })
}
