import { Card, CardContent, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./index.css"
import { textAlign } from '@mui/system';

function Login() {
  return (
    <Fragment>
      <Card className='login-container'>
        <CardContent sx={{display: 'grid', margin: '20px'}}>
         
          <Typography variant='h6'>Sign in</Typography>
          
            <div className='form'>
              <TextField 
              label="Username" 
              sx={{marginBottom: '15px', 
              marginTop: '10px',}}
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
              />
            </div>
            
            <Link>
                <Typography variant='caption' sx={{color:'grey', textAlign:'right'}}>Forgot password</Typography>
            </Link>
            <Button 
              variant="contained" 
              sx={{marginTop: '10px',
              width: '90px'}}>
                sign in
            </Button>
          


        </CardContent>
      </Card> 
    </Fragment>
  )
}

export default Login