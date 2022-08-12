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
        Sets 4 x Reps 10
      </div>
    </div>
  )
}