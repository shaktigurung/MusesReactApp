export default (state = [], action) => {
  switch (action.type) {
    case "RESOURCES_LIST":
      return action.payload
    case "REMOVE_RESOURCE":
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};