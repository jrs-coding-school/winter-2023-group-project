import React from "react"
import { Grid } from "@mui/material"
import QuickPlayLeaderboard from "./QuickPlayLeaderboard"
import './index.css'
import { getLeaderboard } from "../../utility/api"


function Leaderboard (props) { //do fetch request an pass in data as a prop - quickplay leaderboard
  return (
  <Grid>
    <h1 className="pageHeader">
      Leaderboards
    </h1>
    <Grid item xs sx={{
      display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <QuickPlayLeaderboard/>
    </Grid>
  </Grid>
  )
}

export default Leaderboard
