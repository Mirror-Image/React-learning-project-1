import {combineReducers} from 'redux'
import quizReducer from './quiz';


/*
rootReducer - это функция которая объединяет все reducer'ы
*/
export default combineReducers({
  quiz: quizReducer,
})