import React, { useState } from 'react';
import { Box, Slider, FormLabel, FormControl, FormGroup, FormHelperText, Checkbox, FormControlLabel } from '@mui/material';
import styles from './WorkoutSelection.module.css';


export default function WorkoutSelection({ workoutChange }) {
  const [state, setState] = useState({
    chest: false,
    arms: false,
    back: false,
    shoulders: false,
    legs: false,
    core: false,
    muscle: true,
    mobility: false,
    cardio: false,
    flexibility: false,
    time: ''
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleTimeChange = (event, newValue) => {
    setState({
      ...state,
      time: newValue
    });
  };

  const targetMuscle = {
    chest: ['pectorals', 'serratus anterior'],
    arms: ['biceps', 'forearms', 'triceps'],
    back: ['lats', 'spine', 'upper back'],
    shoulders: ['delts', 'levator scapulae', 'traps'],
    legs: ['abductors', 'adductors', 'calves', 'glutes', 'hamstrings', 'quads'],
    core: ['abs'],
    mobility: ['cardiovascular system'],
  }

  const handleClick = () => {
    let newState = [];
    for (let key in state) {
      if (state[key] === true) {
        newState = newState.concat(targetMuscle[key])
      }
    }
    console.log(newState);
    newState.push(state.time)
    workoutChange(newState);
  }

  const marks = [
    {
      value: 15,
      label: '15 min',
    },
    {
      value: 30,
      label: '30 min',
    },
    {
      value: 60,
      label: '60 min',
    },
  ];

  const { chest, arms, back, shoulders, legs, core, muscle, mobility, cardio, flexibility } = state;
  const error = [mobility, cardio, flexibility].filter((v) => v).length !== 1;
  const error2 = [chest, arms, back, shoulders, legs, core].filter((v) => v).length !== 2;
  return (
    <>
      <div className={styles.WOSelection}>
        <Box className={styles.checkbox}>
          <FormControl className={styles.formControl} error={error2} component='fieldset' variant='standard'>
            <FormLabel component='legend'>
              Workout Selection
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={muscle} onChange={handleChange} name="muscle" />
                }
                label="muscle"
              />
            </FormGroup>
            {muscle &&
              <FormGroup className={styles.muscleSelection}>
                <FormControlLabel
                  control={
                    <Checkbox checked={chest} onChange={handleChange} name="chest" />
                  }
                  label="chest"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={arms} onChange={handleChange} name="arms" />
                  }
                  label="arms"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={back} onChange={handleChange} name="back" />
                  }
                  label="back"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={shoulders} onChange={handleChange} name="shoulders" />
                  }
                  label="shoulders"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={legs} onChange={handleChange} name="legs" />
                  }
                  label="legs"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={core} onChange={handleChange} name="core" />
                  }
                  label="core"
                />
                <FormHelperText>Select Two</FormHelperText>
              </FormGroup>}
          </FormControl>
          <FormControl className={styles.formControl} error={error} component='fieldset' variant='standard'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={mobility} onChange={handleChange} name="mobility" />
                }
                label="mobility"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={cardio} onChange={handleChange} name="cardio" />
                }
                label="cardio"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={flexibility} onChange={handleChange} name="flexibility" />
                }
                label="flexibility"
              />
            </FormGroup>
            <FormHelperText>Select Only One</FormHelperText>
          </FormControl>
        </Box>
      </div>
      <div className={styles.timeBody}>
        Time Limit
        <Box className={styles.timeSlider}>
          <Slider
            aria-label="Time Limit"
            defaultValue={0}
            step={null}
            max={60}
            marks={marks}
            onChange={handleTimeChange}
          />
        </Box>
      </div>
      <button onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
