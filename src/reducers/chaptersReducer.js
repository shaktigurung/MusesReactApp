export default (state = [], action) => {
  switch (action.type) {
    case "CHAPTER_LIST":
      return action.payload;
    default:
      return state;
  }
};