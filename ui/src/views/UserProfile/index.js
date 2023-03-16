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
import GameHistoryCard from "./GameHistoryCard";
import GameHistoryContainer from "./GameHistoryContainer";
import GameStatistics from "./GameStatistics";
import { useState, useEffect } from "react";

//API call to get the user profile based on username, returns user data object
function GetUserProfile(username){
  const [data, setData] = useState({})

  console.log(`http://localhost:9000/${username}`)
  useEffect(() => {
    fetch(`http://localhost:9000/user/${username}`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return data
}

//API call to get the gameMode values from the game table
function GetGameModes(){
  
  const gameModeTypes = ["Quick Play", "3 Strikes", "Fast 25"]

  // SELECT SUBSTRING(COLUMN_TYPE,5)
  // FROM information_schema.COLUMNS
  // WHERE TABLE_SCHEMA='trivia_db' 
  // AND TABLE_NAME='game'
  // AND COLUMN_NAME='gameMode'  
  
  // useEffect(() => {
  //   fetch('fetch to ')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, [])

  return gameModeTypes
}

function UserProfile(props) {
  const { username } = useParams();

  // Get User Profile
  const data = GetUserProfile(username)

  //Get gamemode enum from the database to populate select box
  const gameModeTypes = GetGameModes()

  // Handle state and change event if gameMode is changed
  const [gameMode, setGameMode] = useState(10);

  const handleChange = (event) => {
    console.log("state before", event.target.value)
    setGameMode(event.target.value)
  }


  return (
    <div>
      {/* Username and Joined Date */}
      <Card sx={{ minWidth: 275, marginTop: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Avatar></Avatar>
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
        <Grid container item sm={6}>
          <Box sx={{ display: "flex", marginLeft: 3, marginTop: 3 }}>
            <Typography variant="h5" component="div" sx={{ marginTop: 1.5 }}>
              Game History
            </Typography>

            {/* Game Mode Selection Dropdown */}
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select defaultValue={10} displayEmpty onChange={handleChange}>
                <MenuItem value={10}>{"All Modes"}</MenuItem>
                <MenuItem value={20}>{gameModeTypes[0]}</MenuItem>
                <MenuItem value={30}>{gameModeTypes[1]}</MenuItem>
                <MenuItem value={40}>{gameModeTypes[2]}</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Game History Cards */}
          <Box sx={{ flexDirection: "column" }}>
            <GameHistoryContainer username={username}/>
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
            <GameStatistics></GameStatistics>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
