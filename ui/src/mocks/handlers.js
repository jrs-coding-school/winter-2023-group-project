import { rest } from 'msw'
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  rest.get(`${baseUrl}/user/token`, (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json({username: "dantewanders"})) // respond using a mocked JSON body
  }),
  // rest.get('/farewell', (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json({farewell: 'goodbye there'})) // respond using a mocked JSON body
  // }),
]