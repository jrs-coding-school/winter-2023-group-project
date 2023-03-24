import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TablePagination, TableSortLabel } from '@mui/material';
import { Link } from "react-router-dom";
import '../../mocks/data/leaderboard.json'
import { getLeaderboard } from '../../utility/api';

function descindingComparator(a,b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function difficultyComparator(a,b, orderBy) {

  const sortMap = {
    'easiest': 0,
    'easy': 1,
    'medium': 2,
    'hard': 3,
    'hardest': 4,
 }

  if (sortMap[b[orderBy]] < sortMap[a[orderBy]]) {
    return -1
  }
  if (sortMap[b[orderBy]] > sortMap[a[orderBy]]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  console.log("orderBy:", orderBy)
  if (orderBy === 'difficulty') {
    return order === "desc"
    ? (a,b) => difficultyComparator(a,b, orderBy)
    : (a,b) => -difficultyComparator(a,b, orderBy)
    
  } else {

    return order === "desc"
    ? (a,b) => descindingComparator(a,b, orderBy)
    : (a,b) => -descindingComparator(a,b, orderBy)
  }
}

const sortedUserData = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((element, index) => [element, index])
  stabilizedRowArray.sort((a,b) => {
    const order = comparator(a[0], b[0])
    if(order !==0) return order
    return a[1] - b[1]
  })
  return stabilizedRowArray.map((element) => element[0])
}


const QuickPlayLeaderboard = function (props) {

  const [orderDirection, setOrderDirection] = useState('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState('score')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5, 10, 20)
  const [data, setData] = useState(null)
  const [gameMode, setGameMode] = useState('Quick Play')
  console.log(data)

  useEffect(() => {
    getLeaderboard(gameMode)
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [gameMode])

  const handleRequestSort = (event, property) => {
    console.log('property:', property)
    const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
    setValueToOrderBy(property)
    setOrderDirection(isAscending ? 'desc' : 'asc')
  }

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value), 10)
    setPage(0)
  }

  //conditional rendering guard clauses
    //when cant read map even with returning an array need to return a div to give time to render
  if (!data){
    return <div>loading...</div>
  }

  return (
  <TableContainer sx={{width:'75%'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      <TableHead>
          <TableRow>
            <TableCell  sx={{color: '#42a5f5'}} align="center" colSpan={4}>
              <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Grid item>
                  <Button variant="contained" onClick={() => setGameMode('Quick Play')}>
                    Quick Play
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => setGameMode('Fast 25')}>
                    Fast 25
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => setGameMode('3 Strikes')}>
                    3 Strikes
                  </Button>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
      </TableHead>
      <TableHead
        // valueToOrderBy={valueToOrderBy}
        // orderDirection={orderDirection}
        // onRequestSort={handleRequestSort}
      >
        <TableRow>
          <TableCell key="username">
            <h4>Username</h4>
          </TableCell>
          
          <TableCell 
            key="score" 
            align="right">
            <TableSortLabel 
              active={valueToOrderBy === "score"}
              direction={valueToOrderBy === "score" ? orderDirection: 'asc'}
              onClick={createSortHandler("score")}>
              <h4>Score</h4>
            </TableSortLabel>
          </TableCell>
          
          <TableCell 
            key="duration" 
            align="right">
            <TableSortLabel 
              active={valueToOrderBy === "duration"}
              direction={valueToOrderBy === "duration" ? orderDirection: 'asc'}
              onClick={createSortHandler("duration")}>
              <h4>Time</h4>
            </TableSortLabel>
          </TableCell>
          
          {/* <TableCell 
            key="difficulty" 
            align="right">
            <TableSortLabel 
              active={valueToOrderBy === "difficulty"}
              direction={valueToOrderBy === "difficulty" ? orderDirection: 'asc'}
              onClick={createSortHandler("difficulty")}>
              <h4>Difficulty</h4>
            </TableSortLabel>
          </TableCell> */}
        </TableRow>
      </TableHead>
      
      <TableBody>
        {
        sortedUserData(data, getComparator(orderDirection, valueToOrderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((user, index) => (
          <TableRow key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="user">
              <Button
                component={Link} 
                to={`/user/${user.username}`}>
                  {user.username}
              </Button>
            </TableCell>
            <TableCell align="right">{user.score}</TableCell>
            <TableCell align="right">{user.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <TablePagination 
      rowsPerPageOptions={[5, 10, 20]}
      component="div"
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </TableContainer>
  );
}

export default QuickPlayLeaderboard