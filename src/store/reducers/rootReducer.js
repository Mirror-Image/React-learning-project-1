import {combineReducers} from 'redux'
import quizReducer from './quiz';
import createReducer from "./create";


/*
rootReducer - это функция которая объединяет все reducer'ы
*/
export default combineReducers({
  quiz: quizReducer,
  create: createReducer
})