export default (state = [], action) => {
  switch (action.type) {
    case "RESOURCES_LIST":
      return {
        ...state,
        resources: action.payload
      }
    default:
      return state;
  }
};
