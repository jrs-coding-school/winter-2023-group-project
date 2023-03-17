import { rest } from 'msw'

// ** mock data JSON
import getUserProfile from './data/getUserProfile.json'
import getGameHistory from './data/getGameHistory.json'
import getGameStatistics from './data/getGameStatistics.json'

// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  rest.get(`${baseUrl}/user/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
   
    return res(ctx.json(getUserProfile)) // respond using a mocked JSON body
  }),

  rest.get(`${baseUrl}/game/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
  
    return res(ctx.json(getGameHistory)) // respond using a mocked JSON body
  }),

  rest.get(`${baseUrl}/stats/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
  
    return res(ctx.json(getGameStatistics)) // respond using a mocked JSON body
  }),

  // rest.get('/farewell', (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json({farewell: 'goodbye there'})) // respond using a mocked JSON body
  // }),
]