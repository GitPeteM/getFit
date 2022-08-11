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
      workouts: [{
        muscle: [
          {
            Name: 'Dumbell Bench Press',
            Description: 'Find a spotter, Lie down on a bench with your shoulder blades and feet flat on the floor. Dumbells to touch at the top.',
            Sets: 4,
            Reps: 8,
            Hold: 5,
            focus: 'chest'
          },
          {
            Name: 'TRX Y and T Deltoid Fly',
            DescriptionOne: 'Extend your arms infront of your shoulders, palms facing each other, and position your feet behind you. Lean Forward.',
            DescriptionTwo: 'Keeping your abs braced, open your arms to a T position with your palms forward and elbows slightly bent.',
            DescriptionThree: 'Squeeze your chest to bring your hands together in front of you.',
            Sets: 4,
            Reps: 10,
            Hold: '',
            focus: 'chest'
          },
          {
            Name: 'Pullups',
            DescriptionOne: 'Exhale while pulling yourself up so your chin is level with the bar. Pause at the top.',
            DescriptionTwo: 'Lower yourself (inhaling as you go down) until your elbows are straight.',
            Sets: 4,
            Reps: 10,
            focus: 'back'
          },
        ],
        time: 30,
      },
      {
        mobility: [
          {
            Name: 'stretch'
          }
        ],
        time: 30,
      }
      ]
    };

    this.handleWOChange = this.handleWOChange.bind(this);
  }

  // Get data from WorkoutSelection
  // Iterate through the local state and filter out the workouts that match the truthy values from WorkoutSelection.
  // Create a new array of workouts that include the filtered out workouts.
  // Send this to WorkoutList.

  handleWOChange(WOSelection) {
console.log(WOSelection)
    // check if focus is true and time matches
      // add to a new array
      // new array is passed to WorkoutList

  }

  render() {
    const { workouts } = this.state.workouts;
    // console.log('this workout', workouts)
    return (
      <div className={styles.App}>
        <NavBar />
        {/* <QuoteBar /> */}
        <div className={styles.body}>
          <div className={styles.selection}>
            <WorkoutSelection workoutChange={this.handleWOChange}/>
          </div>
          <div className={styles.workouts}>
            <WorkoutList workouts={this.state.workouts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
