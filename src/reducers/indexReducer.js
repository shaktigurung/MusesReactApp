import { combineReducers } from 'redux';
import chaptersReducer from "./chaptersReducer";
import selectChapterReducer from "./selectChapterReducer";
import registerReducer from './registerReducer';
import { reducer as formReducer } from "redux-form";
import eventListReducer from './eventListReducer';
import sponsorReducer from "./sponsorReducer";
import resourcesReducer from './resourcesReducer';
import alertReducer from "./alertReducer"
import newsReducer from './newsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  auth: registerReducer,
  chapters: chaptersReducer,
  selectedChapter: selectChapterReducer,
  form: formReducer,
  events: eventListReducer,
  sponsors: sponsorReducer,
  resources: resourcesReducer,
  news: newsReducer,
  users: usersReducer,
  alert: alertReducer,
});