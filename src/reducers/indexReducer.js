import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import chaptersReducer from "./chaptersReducer";
import selectChapterReducer from "./selectChapterReducer";
import registerReducer from './registerReducer'
import { reducer as formReducer } from "redux-form";
import eventListReducer from './eventListReducer';
import resourcesReducer from './resourcesReducer';

export default combineReducers({
  simpleReducer,
  auth: registerReducer,
  chapters: chaptersReducer,
  selectedChapter: selectChapterReducer,
  form: formReducer,
  events: eventListReducer,
  resources: resourcesReducer
});