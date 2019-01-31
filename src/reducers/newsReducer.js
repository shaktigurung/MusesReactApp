export default (state = null, action) => {
  switch (action.type) {
    case "CREATE_NEWS":
      return action.payload
    case "GET_NEWS":
      return action.payload 
    case "UPDATE_NEWS":
      return action.payload
    default:
      return state
  }
}