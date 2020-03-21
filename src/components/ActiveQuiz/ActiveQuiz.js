import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";


const ActiveQuiz = props => {
  // console.log('Active', props)

  // TODO: answers={props.answers}
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.questionNumber}.</strong>&nbsp;
          {props.question}
        </span>

        <small>{props.questionNumber} из {props.quizLength}</small>
      </p>

      <AnswersList
        state={props.state}
        answer={props.answer}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )}

export default ActiveQuiz