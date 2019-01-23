export default (state = [], action) => {
  switch (action.type) {
    case "RESOURCES_LIST":
      return action.payload
    default:
      return state;
  }
};
