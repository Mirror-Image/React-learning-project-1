import React from 'react';
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
  console.log('List ', props)

  // TODO: answers
  return (
  <ul className={classes.AnswersList}>
    {props.answer.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      )
    })}
  </ul>
)}

export default AnswersList