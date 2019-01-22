export default (state = [], action) => {
  switch (action.type) {
    case "GET_SPONSORS":
      return action.payload
    case "CREATE_SPONSOR":
      return action.payload
    default:
      return state
  }
}