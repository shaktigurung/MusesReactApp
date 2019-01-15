import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import {reducer as formReducer} from "redux-form";

export default combineReducers({
 simpleReducer,
 form: formReducer
});