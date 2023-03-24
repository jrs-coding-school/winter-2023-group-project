import React from 'react'
import { Fragment } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './index.css'
import LetsPlayButton from '../../components/LetsPlayButton';

function HowToPlay() {
  return (
    <Fragment>

      <Typography align='center' fontSize='32px' fontWeight='bold'>
        HOW TO PLAY
      </Typography>

      <Box display='flex' ml='20px' mr='20px'>

        <Card className='card-container' sx={{boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)'}}>
          
          <CardContent>

            <Typography variant='h5' align='center' fontWeight='bold'>
              Quick Play
            </Typography>

            <Typography align='center' pt='10px'>
            In this mode, you will have 3 minutes to answer as many questions as you can. 
            The questions will be selected at random from a pool of questions, 
            and you will have to answer them as quickly and accurately as possible. 
            Once your time is up, the game will end.

            <br /> <br />

            Play this challenge to test your knowledge in a short amount of time!
            </Typography>

          </CardContent>
        
        </Card>
        
        <Card className='card-container' sx={{boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)'}}>
          
          <CardContent>
            
            <Typography variant='h5' align='center' fontWeight='bold'>
              3 Strikes
            </Typography>

            <Typography align='center' pt='10px'>
            In this mode, you will play until you get 3 questions wrong. 
            Use your knowledge and critical thinking skills to answer 
            the questions correctly. When a question is answered incorrectly, 
            you will receive a strike. Once you reach 3 strikes, the game will end.
            
            <br /> <br />

            Play this mode to test your knowledge and see how long you can last without making any mistakes!
            </Typography>

          </CardContent>
        
        </Card>
        
        <Card className='card-container' sx={{boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)'}}>
          
          <CardContent>
            
            <Typography variant='h5' align='center' fontWeight='bold'>
              Fast 25
            </Typography>

            <Typography align='center' pt='10px'>
            In this mode, you will try to answer 25 questions as fast as you can. 
            The questions will be selected at random from a pool of questions. Your goal is to
            answer them as quickly and accurately as possible. 
            The game will end once you answers all 25 questions.

            <br /> <br />

            Play this to challenge yourself and 
            see how fast you can answer questions while maintaining accuracy!
            </Typography>

          </CardContent>
        
        </Card>

      </Box>

      <Box align='center' mb='10px'>
        <Typography variant='body1'>
            See how it works!
        </Typography>
      </Box>

      <Box align='center'>
        <Box
          component="img"
          sx={{ width: '650px', justifyContent: 'center', boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.3)', borderRadius:'15px' }}
          alt='Example gameplay'
          src='/screenshot.png'
        />
      </Box>
      
      <Box align='center' p='3px' mt='30px'>
        <Typography variant='body1' mb='10px'>
          Become a Trivia Genius!
        </Typography>
        <LetsPlayButton />
      </Box>

    </Fragment>
  )
}

export default HowToPlay