import React from 'react'
import { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import './index.css'

function Gamemodes() {
  return (
    <Fragment>
      <Box className='container'>

        <Typography variant='h4' fontWeight='bold' align='center' mt='20px'>
          GAME MODES
        </Typography>

        <Box className='modes-container' pt='20px'>
        
          <Button variant='contained'>
            <Typography className='button-text'>
              Quick Play
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              3 Strikes
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Fast 25
            </Typography>
          </Button>
        
        </Box>

        <Typography variant='h4' fontWeight='bold' align='center' mt='50px'>
          CHOOSE YOUR CATEGORY
        </Typography>

        <Box className='category-container' pt='20px'>
        
          <Button variant='contained'>
            <Typography className='button-text'>
              Arts & Literature
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Film & TV
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Food & Drink
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              General Knowledge
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Geography
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              History
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Music
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Science
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Society & Culture
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              Sport & Leisure
            </Typography>
          </Button>

        </Box>

        <Typography variant='h4' fontWeight='bold' align='center' mt='50px'>
          CHOOSE YOUR DIFFICULTY
        </Typography>

        <Box className='modes-container' pt='20px'>
        
          <Button variant='contained'>
            <Typography className='button-text'>
              EASY
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              MEDIUM
            </Typography>
          </Button>

          <Button variant='contained'>
            <Typography className='button-text'>
              HARD
            </Typography>
          </Button>
        
        </Box>

      </Box>
    </Fragment>
  )
}

export default Gamemodes