import React from 'react';
import WorkoutEntry from './WorkoutEntry.jsx';
import styles from './WorkoutList.module.css';


export default function WorkoutList({ workouts }) {
  // console.log('workouts', workouts);
  const list = workouts[0].muscle;
  return (
    <div className={styles.workoutList}>
      {list.map((workout, index) =>
        <WorkoutEntry wo={workout} key={index} />
      )}
    </div>
  )
}