export default (state = [], action) => {
  switch (action.type) {
    case "USERSBYCHAPTER_LIST":
      return action.payload
    default:
      return state;
  }
};