import { rest } from 'msw'

// ** mock data JSON
import getUserProfile from './data/getUserProfile.json'

// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  rest.get(`${baseUrl}/user/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(getUserProfile)) // respond using a mocked JSON body
  }),
  // rest.get('/farewell', (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json({farewell: 'goodbye there'})) // respond using a mocked JSON body
  // }),
]