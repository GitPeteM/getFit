import React from 'react';
import styles from './WorkoutList.module.css';

export default function WorkoutEntry({ wo }) {
  // console.log(wo);
  return (
    <div className={styles.woCard}>
      <h3 className={styles.header}>
      {wo.Name}
      </h3>
      <div className={styles.description}>
        Description :
        < br />
        {wo.Description || (wo.DescriptionOne &&
        `1. ${wo.DescriptionOne}`)}
        < br />
        {wo.DescriptionTwo &&
        `2. ${wo.DescriptionTwo}`}
        < br />
        {wo.DescriptionThree &&
        `3. ${wo.DescriptionThree}`}
      </div>
      <div className={styles.numbers}>
        Sets {wo.Sets} x Reps {wo.Reps}{wo.Hold && ` x Hold ${wo.Hold} secs`}
      </div>
    </div>
  )
}