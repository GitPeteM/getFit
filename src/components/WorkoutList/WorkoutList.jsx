import React from 'react';
import WorkoutEntry from './WorkoutEntry.jsx';
import styles from './WorkoutList.module.css';


export default function WorkoutList({ workouts }) {
  return (
    <div className={styles.workoutList}>
      {workouts.map((workout, index) =>
        <WorkoutEntry wo={workout} key={workout.id} />
      )}
    </div>
  )
}