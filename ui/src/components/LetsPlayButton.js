import React from 'react'
import { Fragment } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function LetsPlayButton() {
  return (
    <Fragment>
        <Button 
          component={Link} 
          to='/gamemodes' 
          variant='contained' 
          size='large' 
          sx={{boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)'}}>
          <Typography fontWeight='bold' fontSize='24px'>
            let's play!
          </Typography>
        </Button>
    </Fragment>
  )
}

export default LetsPlayButton