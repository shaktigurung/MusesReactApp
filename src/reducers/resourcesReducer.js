export default (state = [], action) => {
  switch (action.type) {
    case "RESOURCES_LIST":
      return action.payload;
    case "REMOVE_RESOURCE":
      return state.filter((resource) => resource._id !== action.resourceId);
    case "UPDATE_RESOURCE":
      return state.map((resource) => resource._id === action.payload._id ? action.payload : resource);
    default:
      return state;
  }
};