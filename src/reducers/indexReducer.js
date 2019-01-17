import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { reducer as formReducer } from "redux-form";
import chaptersReducer from "./chaptersReducer";
import selectChapterReducer from "./selectChapterReducer";

export default combineReducers({
  simpleReducer,
  form: formReducer,
  chapters: chaptersReducer,
  selectedChapter: selectChapterReducer
});