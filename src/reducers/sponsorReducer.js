export default (state = [], action) => {
  switch (action.type) {
    case "GET_SPONSORS":
      return action.payload;
    case "REMOVE_SPONSOR":
      return state.filter((sponsor) => sponsor._id !== action.sponsorId);
    case "UPDATE_SPONSOR":
      // return state.map((sponsor) => sponsor._id === action.payload._id ? action.payload : sponsor);
      return action.payload
    default:
      return state
  }
}