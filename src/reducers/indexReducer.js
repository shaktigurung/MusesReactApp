import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import registerReducer from './registerReducer'
import {reducer as formReducer} from "redux-form";

export default combineReducers({
 simpleReducer,
 auth: registerReducer,
 form: formReducer
});