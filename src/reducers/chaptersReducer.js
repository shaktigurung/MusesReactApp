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
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};