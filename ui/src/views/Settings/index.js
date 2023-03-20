import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//I want to validate the username and password
//I want to update password in the database
//I need to connect the update field to the database



function Settings(props) {
      return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <div>
      <h1> Update Password </h1>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Username"
          variant="filled"
        />
        <TextField
           required
           id="password-required"
           label="Required"
           defaultValue="Password"
           variant="filled"
        />
        <TextField
          required
          id="password-update"
          label="Required"
          defaultValue="Updated Password"
          variant="filled"
        />
        <button> Update </button>
        {/* <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        /> */}
      </div>
     
    </Box>
  );
}
export default Settings;