import React from 'react';
import styles from './WorkoutList.module.css';

export default function WorkoutEntry({ wo }) {
  return (
    <div className={styles.woCard}>
      <h3 className={styles.header}>
        {(wo.name).toUpperCase()}
      </h3>
      <div className={styles.description}>
        Muscle Group : {wo.target}
        < br/>
        Equipment : {wo.equipment}
        < br />
        <img src={wo.gifUrl} alt='Workout Example' />
      </div>
      <div className={styles.numbers}>
        Decide on Sets and Reps. Recommended to have a warm-up set with any weighted workout.
      </div>
    </div>
  )
}