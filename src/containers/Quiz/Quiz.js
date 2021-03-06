import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from '../../store/actions/quiz'


class Quiz extends Component {
  /*state = {
    results: {}, // {[id]: 'success'/'error'}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success'/'error'}
    quiz: [
      /!*{
        question: 'Какого цвета небо?',
        rightAnswerID: 2,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4},
        ]
      },
      {
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerID: 3,
        id: 2,
        answers: [
          {text: '1700', id: 1},
          {text: '1705', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4},
        ]
      },*!/
    ],
    loading: true
  };*/

  /*onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]

      // чтобы при двойом клике на ответ не выскакивало 'Finished'
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          // console.log('Finished')
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        // так как ключ и значение совпадают (смотри ниже коммент)
        results
        // results: results
      })
    }
  }*/

  /*isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }*/

  /*retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }*/

  /*async componentDidMount() {
    try {
      const response = await axios.get(`quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      console.log(quiz)

      this.setState({
        quiz, loading: false
      })

    } catch (e) {
      console.log(e)
    }

    console.log('Quiz ID = ', this.props.match.params.id)
  }*/
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }

  render() {
    console.log(this.props.quiz);
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {
            this.props.loading || !this.props.quiz
              ? <Loader />
              : this.props.isFinished
                ? <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  onRetry={this.props.retryQuiz}
                />
                : <ActiveQuiz
                  answers={this.props.quiz[this.props.activeQuestion].answers}
                  question={this.props.quiz[this.props.activeQuestion].question}
                  onAnswerClick={this.props.quizAnswerClick}
                  quizLength={this.props.quiz.length}
                  questionNumber={this.props.activeQuestion + 1}
                  state={this.props.answerState}
                />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results, // {[id]: 'success'/'error'}
    isFinished:state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState, // {[id]: 'success'/'error'}
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)