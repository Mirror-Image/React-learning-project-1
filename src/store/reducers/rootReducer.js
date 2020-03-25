import {combineReducers} from 'redux'
import quizReducer from './quiz';
import createReducer from "./create";
import authReducer from "./auth";


/*
rootReducer - это функция которая объединяет все reducer'ы
*/
export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer
})