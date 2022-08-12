import React from "react";
import NavBar from "./NavBar.jsx";
import QuoteBar from "./QuoteBar.jsx";
import WorkoutList from "./WorkoutList/WorkoutList.jsx";
import WorkoutSelection from "./WorkoutSelection/WorkoutSelection.jsx";
import axios from "axios";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutList: [],
      workouts: [],
      time: 0,
    };

    this.handleWOChange = this.handleWOChange.bind(this);
    this.checkForWorkoutList = this.checkForWorkoutList.bind(this);
    this.getWorkouts = this.getWorkouts.bind(this);
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
        this.setState({workouts: response.data});
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
    console.log('handleWOChange', WOSelection)
    let newTime = WOSelection[WOSelection.length - 1];
    this.setState({time: newTime});

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
    console.log('time', time);
    if (time === 0) {
      return (<div className={styles.text}>
        Please select a Time Limit
      </div>
      )
    } else if (time === 15) {
      let i = 1;
      while (i <= 4) {
        let index = Math.floor(Math.random() * WOLength)
        WOList.push(this.state.workoutList[index])
        i++;
      }
      return <WorkoutList workouts={WOList} />
    } else if (time === 30) {
      let i = 1;
      while (i <= 7) {
        let index = Math.floor(Math.random() * WOLength)
        WOList.push(this.state.workoutList[index])
        i++;
      }
      return <WorkoutList workouts={WOList} />
    }
    let i = 1;
    while (i <= 10) {
      let index = Math.floor(Math.random() * WOLength)
      WOList.push(this.state.workoutList[index])
      i++;
    }
    return <WorkoutList workouts={WOList} />
  }

  render() {
    return (
      <div className={styles.App}>
        <NavBar />
        {/* <QuoteBar /> */}
        <div className={styles.body}>
          <div className={styles.selection}>
            <WorkoutSelection workoutChange={this.handleWOChange} />
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



// workouts: [{
//   muscle: [
//     {
//       Name: 'Dumbell Bench Press',
//       Description: 'Find a spotter, Lie down on a bench with your shoulder blades and feet flat on the floor. Dumbells to touch at the top.',
//       Sets: 4,
//       Reps: 8,
//       Hold: 5,
//       focus: 'chest'
//     },
//     {
//       Name: 'TRX Y and T Deltoid Fly',
//       DescriptionOne: 'Extend your arms infront of your shoulders, palms facing each other, and position your feet behind you. Lean Forward.',
//       DescriptionTwo: 'Keeping your abs braced, open your arms to a T position with your palms forward and elbows slightly bent.',
//       DescriptionThree: 'Squeeze your chest to bring your hands together in front of you.',
//       Sets: 4,
//       Reps: 10,
//       Hold: '',
//       focus: 'chest'
//     },
//     {
//       Name: 'Pullups',
//       DescriptionOne: 'Exhale while pulling yourself up so your chin is level with the bar. Pause at the top.',
//       DescriptionTwo: 'Lower yourself (inhaling as you go down) until your elbows are straight.',
//       Sets: 4,
//       Reps: 10,
//       focus: 'back'
//     },
//   ],
//   time: 30,
// }]


// {
//   "bodyPart": "upper arms",
//   "equipment": "band",
//   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
//   "id": "0968",
//   "name": "band alternating biceps curl",
//   "target": "biceps",
// },
// {
//   "bodyPart": "upper arms",
//   "equipment": "band",
//   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0976.gif",
//   "id": "0976",
//   "name": "band concentration curl",
//   "target": "biceps",
// },
// {
//   "bodyPart": "upper arms",
//   "equipment": "band",
//   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0986.gif",
//   "id": "0986",
//   "name": "band one arm overhead biceps curl",
//   "target": "biceps",
// }