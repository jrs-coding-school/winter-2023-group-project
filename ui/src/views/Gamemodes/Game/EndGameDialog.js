import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EndGameDialog(props) {

  const {
    results
  } = props

  console.log(results)
  const calculatedScore =  results.responses.filter(response => response.isCorrect === true)

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Your Results!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Questions correct: {calculatedScore.length} out of {results.responses.length}
          <br/>
          Score: {(calculatedScore.length * 1000)}
          </DialogContentText>
        </DialogContent>

          <Button onClick={() => window.location.reload()}>Play Again</Button>
          <Button component={Link} to={'/leaderboard'} onClick={handleClose} autoFocus>
            Leaderboard
          </Button>
      </Dialog>
    </div>
  );
}