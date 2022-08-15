import React from 'react';
import WorkoutEntry from './WorkoutEntry.jsx';
import styles from './WorkoutList.module.css';


export default function WorkoutList({ workouts, handleSave, fakeSave }) {
  console.log('current Workout', workouts);
  return (
    <div className={styles.workoutList}>
      <button onClick={() => {handleSave(workouts); fakeSave()}}>
        Save Workout
      </button>
      {workouts.map((workout, index) =>
        <WorkoutEntry wo={workout} key={workout.id} />
      )}
    </div>
  )
}