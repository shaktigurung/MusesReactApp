export default (state = null, action) => {
  switch (action.type) {
    case "SELECTED_CHAPTER":
      return action.chapterId;
    default:
      return state;
  }
};