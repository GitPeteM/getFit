import React from "react";
import NavBar from "./NavBar.jsx";
import QuoteBar from "./QuoteBar.jsx";
import WorkoutList from "./WorkoutList/WorkoutList.jsx";
import WorkoutSelection from "./WorkoutSelection/WorkoutSelection.jsx";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import axios from "axios";


import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutList: [],
      workouts: [],
      time: 0,
      saveWorkout: false,
    };

    this.handleWOChange = this.handleWOChange.bind(this);
    this.checkForWorkoutList = this.checkForWorkoutList.bind(this);
    this.getWorkouts = this.getWorkouts.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.savedWorkout = this.savedWorkout.bind(this);
    this.createData = this.createData.bind(this);
  }

  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts() {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': 'ba2e019b04msh280c7ca3243ac23p1c4a94jsn46c2269153a4',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then((response) => {
        this.setState({ workouts: response.data });
      }).catch((error) => {
        console.error(error);
      });
  }

  handleWOChange(WOSelection) {
    let newWorkouts = [];
    const workouts = this.state.workouts;
    workouts.forEach(workout => {
      if (WOSelection.includes(workout.target)) {
        newWorkouts.push(workout);
      }
    })
    this.setState({ workoutList: newWorkouts });
    let newTime = WOSelection[WOSelection.length - 1];
    this.setState({ time: newTime });
  }

  checkForWorkoutList() {
    let time = this.state.time;
    let WOList = [];
    let WOLength = this.state.workoutList.length;
    if (this.state.workoutList.length === 0) {
      return (
        <div className={styles.text}>
          Choose a Focus and Generate a Workout
        </div>
      )
    }
    if (time === 0) {
      return (<div className={styles.text}>
        Please select a Time Limit
      </div>
      )
    } else if (time === 15) {
      let i = 1;
      while (i <= 4) {
        let index = Math.floor(Math.random() * WOLength)
        WOList.push(this.state.workoutList[index]);
        i++;
      }
      return <WorkoutList workouts={WOList} handleSave={this.handleSave} fakeSave={this.savedWorkout} />
    } else if (time === 30) {
      let i = 1;
      while (i <= 7) {
        let index = Math.floor(Math.random() * WOLength)
        WOList.push(this.state.workoutList[index]);
        i++;
      }
      return <WorkoutList workouts={WOList} handleSave={this.handleSave} fakeSave={this.savedWorkout} />
    }
    let i = 1;
    while (i <= 10) {
      let index = Math.floor(Math.random() * WOLength)
      WOList.push(this.state.workoutList[index]);
      i++;
    }
    return <WorkoutList workouts={WOList} handleSave={this.handleSave} fakeSave={this.savedWorkout} />
  }

  savedWorkout() {
    console.log('clicked')
    this.setState({ saveWorkout: true });
  }

  // Create a Save Workout button to database
  handleSave(currentWorkout) {
    axios.post('/workouts', {
      currentWorkout
    })
      .then((response) => {
        console.log('Workout Saved');
      })
      .catch((error) => {
        console.log('There was an error saving the workout', error);
      })
  }

  createData(name, timelimit, numberOfWorkouts) {
    return { name, timelimit, numberOfWorkouts };
  }



  render() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

    const rows = [
      this.createData('Workout001', 'Time: 30', 'Exercises: 7'),
    ];

    const { saveWorkout } = this.state;
    return (
      <div className={styles.App}>
        <NavBar />
        {/* <QuoteBar /> */}
        <div className={styles.body}>
          <div className={styles.selection}>
            <WorkoutSelection workoutChange={this.handleWOChange} />
            <div className={styles.SW}>
              {saveWorkout && (
                <div className={styles.SW_inner}>
                  Saved Workouts
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Workout Name</StyledTableCell>
                          <StyledTableCell align="right">Time Limit</StyledTableCell>
                          <StyledTableCell align="right"># of Exercises</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.timelimit}</StyledTableCell>
                            <StyledTableCell align="right">{row.numberOfWorkouts}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}
            </div>
          </div>
          <div className={styles.workouts}>
            {this.checkForWorkoutList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;