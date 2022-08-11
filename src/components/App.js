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
      workouts: [
        {Name: 'curls'}
      ]
    };
  }

  render() {
    return (
      <div className={styles.App}>
        <NavBar />
        {/* <QuoteBar /> */}
        <header className={styles.AppHeader}>
          <p>Hello World</p>
        </header>
        <div className={styles.body}>
          <WorkoutSelection />
          {/* <WorkoutList /> */}
        </div>
      </div>
    );
  }
}

export default App;
