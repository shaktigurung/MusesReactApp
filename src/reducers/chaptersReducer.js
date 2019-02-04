export default (state = [], action) => {
  switch (action.type) {
    case "CHAPTER_LIST":
      return action.payload;
    case "CREATE_CHAPTER":
      return [
        ...state,
        action.payload
      ];
    case "REMOVE_CHAPTER":
      return state.filter((chapter) => chapter._id !== action.chapterId)
    default:
      return state;
  }
};