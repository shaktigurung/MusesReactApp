import { combineReducers } from 'redux';
import chaptersReducer from "./chaptersReducer";
import selectChapterReducer from "./selectChapterReducer";
import registerReducer from './registerReducer';
import { reducer as formReducer } from "redux-form";
import eventListReducer from './eventListReducer';
import sponsorReducer from "./sponsorReducer";
import resourcesReducer from './resourcesReducer';
import usersReducer from './usersReducer';
import alertReducer from "./alertReducer";

export default combineReducers({
  auth: registerReducer,
  chapters: chaptersReducer,
  selectedChapter: selectChapterReducer,
  form: formReducer,
  events: eventListReducer,
  sponsors: sponsorReducer,
  resources: resourcesReducer,
  users: usersReducer,
  alert: alertReducer,
});