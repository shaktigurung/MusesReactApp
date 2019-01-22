export default (state = [], action) => {
  switch (action.type) {
    case "GET_SPONSORS":
      return {
        ...state,
        sponsors: action.payload
      }
    default:
      return state
  }
}