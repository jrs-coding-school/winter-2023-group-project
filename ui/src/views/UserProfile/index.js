import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import GameHistoryContainer from "./GameHistoryContainer";
import GameStatistics from "./GameStatistics";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../utility/api";

//API call to get the gameMode values from the game table
function GetGameModes(){
  
  const gameModeTypes = ["Quick Play", "3 Strikes", "Fast 25"]

  return gameModeTypes
}

function UserProfile() {
  const [data, setData] = useState(null)
  const { username } = useParams()

  
  
  //Get user info by username passed in URL
  useEffect(() => {
    getUserProfile(username)
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [username])
 
  //Get gamemode enum from the database to populate select box
  const gameModeTypes = GetGameModes()

  // Handle state and change event if gameMode is changed
  const [gameMode, setGameMode] = useState("All Modes")

  const handleChange = (event) => {
    setGameMode(event.target.value) 
  }
  
  if (!data) {
    return <>Loading...</>
  }

  //Format the date
  // const date = data.dateCreated
  // console.log(typeof date)
  // console.log(date.toDateString())

  return (
    <div>
      {/* Username and Joined Date */}
      <Card sx={{ minWidth: 275, marginTop: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Avatar>{username.charAt().toUpperCase()}</Avatar>
            <Typography variant="h4" component="div" sx={{ marginLeft: 2 }}>
              {username}
            </Typography>
          </Box>
          <Typography sx={{ mb: 1.5, marginTop: 1.5 }} color="text.secondary">
            Joined: {data.dateCreated}
          </Typography>
        </CardContent>
      </Card>

      {/* Game History Grid */}
      <Grid direction="row" container spacing={1}>
        <Grid container direction="column" item sm={6}>
          <Box sx={{ display: "flex", marginLeft: 3, marginTop: 3 }}>
            <Typography variant="h5" component="div" sx={{ marginTop: 1.5 }}>
              Game History
            </Typography>

            {/* Game Mode Selection Dropdown */}
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select defaultValue={"All Modes"} displayEmpty onChange={handleChange}>
                <MenuItem value={"All Modes"} >{"All Modes"}</MenuItem>
                <MenuItem value={gameModeTypes[0]}>{gameModeTypes[0]}</MenuItem>
                <MenuItem value={gameModeTypes[1]}>{gameModeTypes[1]}</MenuItem>
                <MenuItem value={gameModeTypes[2]}>{gameModeTypes[2]}</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Game History Cards */}
          <Box sx={{ flexDirection: "column" }}>
            <GameHistoryContainer username={username} gameMode={gameMode}/>
          </Box>
        </Grid>

        {/* Game Statistics */}
        <Grid container item sm={6}>
          <Box sx={{ flexDirection: "column" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginTop: 4.5, marginLeft: 3 }}>
              Game Statistics
            </Typography>
            <GameStatistics username={username} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
