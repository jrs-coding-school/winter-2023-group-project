import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './index.css'

function HowToPlay() {
  return (
    <Fragment>

      <Typography align='center' fontSize='32px' fontWeight='bold'>
        HOW TO PLAY
      </Typography>

      <Box display='flex' ml='20px' mr='20px'>

        <Card className='card-container'>
          
          <CardContent>

            <Typography variant='h5' align='center' fontWeight='bold'>
              Quick Play
            </Typography>

            <Typography align='center'>
              3 minutes to answer as many general knowledge questions as you can.
            </Typography>

          </CardContent>
        
        </Card>
        
        <Card className='card-container'>
          
          <CardContent>
            
            <Typography variant='h5' align='center' fontWeight='bold'>
              3 Strikes
            </Typography>

            <Typography align='center'>
              You only have 3 chances to get a question wrong.
            </Typography>

          </CardContent>
        
        </Card>
        
        <Card className='card-container'>
          
          <CardContent>
            
            <Typography variant='h5' align='center' fontWeight='bold'>
              Fast 25
            </Typography>

            <Typography align='center'>
              Answer 25 questions as fast as you can.
            </Typography>

          </CardContent>
        
        </Card>
      
      </Box>
      
      <Box align='center'>
        <Button component={Link} to='/gamemodes' variant='contained' size='large'>
          <Typography fontWeight='bold' fontSize='24px'>
            play game
          </Typography>
        </Button>
      </Box>

    </Fragment>
  )
}

export default HowToPlay