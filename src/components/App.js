import React from "react";
import NavBar from "./NavBar.jsx";
import QuoteBar from "./QuoteBar.jsx";
import WorkoutList from "./WorkoutList/WorkoutList.jsx";
import WorkoutSelection from "./WorkoutSelection/WorkoutSelection.jsx";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutList: [],
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

      workouts: [
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
          "id": "0968",
          "name": "band alternating biceps curl",
          "target": "biceps",
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0976.gif",
          "id": "0976",
          "name": "band concentration curl",
          "target": "biceps",
        },
        {
          "bodyPart": "upper arms",
          "equipment": "band",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0986.gif",
          "id": "0986",
          "name": "band one arm overhead biceps curl",
          "target": "biceps",
        }]
    };

    this.handleWOChange = this.handleWOChange.bind(this);
    this.checkForWorkoutList = this.checkForWorkoutList.bind(this);
  }

  // Get data from WorkoutSelection
  // Iterate through the local state and filter out the workouts that match the truthy values from WorkoutSelection.
  // Create a new array of workouts that include the filtered out workouts.
  // Send this to WorkoutList.

  handleWOChange(WOSelection) {
    console.log('selection', WOSelection)
    // axios call
    // save the data in local state
    let newWorkouts = [];
    const workouts = this.state.workouts;
    workouts.forEach(workout => {
      if (WOSelection.includes(workout.target)) {
        newWorkouts.push(workout);
      }
    })
    console.log('list', newWorkouts);
    this.setState({ workoutList: newWorkouts })
  }

  checkForWorkoutList() {
    if (this.state.workoutList.length === 0) {
      return (
        <div className={styles.text}>
          Choose a Focus and Generate a Workout
        </div>
      )
    }
    return <WorkoutList workouts={this.state.workoutList} />
  }

  render() {
    const { workoutList } = this.state;
    console.log('workoutList', workoutList)
    return (
      <div className={styles.App}>
        <NavBar />
        {/* <QuoteBar /> */}
        <div className={styles.body}>
          <div className={styles.selection}>
            <WorkoutSelection workoutChange={this.handleWOChange} />
          </div>
          <div className={styles.workouts}>
            {/* {workoutList.length > 0 &&
            <WorkoutList workouts={workoutList} />
            } */}
            {this.checkForWorkoutList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;



// [100 items
//   0:{6 items
//   "bodyPart":"waist"
//   "equipment":"body weight"
//   "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0001.gif"
//   "id":"0001"
//   "name":"3/4 sit-up"
//   "target":"abs"
//   }
//   1:{6 items
//   "bodyPart":"waist"
//   "equipment":"body weight"
//   "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0002.gif"
//   "id":"0002"
//   "name":"45° side bend"
//   "target":"abs"
//   }

// 67:{6 items
//   "bodyPart":"back"
//   "equipment":"band"
//   "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0990.gif"
//   "id":"0990"
//   "name":"band one arm twisting seated row"
//   "target":"upper back"
//   }