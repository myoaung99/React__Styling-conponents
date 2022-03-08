import React, { useState } from 'react';
import styledComponents from 'styled-components';

import Button from '../../UI/Button/Button';

import classes from './CourseInput.module.css';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = event => {

    // if there are any input set true to isValid
    if (enteredValue.trim().length > 0) {
      setValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // if empty input stop here
    if (enteredValue.trim().length === 0) {

      // set isValid to false
      setValid(false)
      return;
    }
    props.onAddGoal(enteredValue);

    // Clear input field after submit with two-way binding
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${classes['form-control']} ${!isValid ? classes.invalid : ''}`}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
