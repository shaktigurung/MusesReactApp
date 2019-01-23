export default (state = null, action) => {
  switch (action.type) {
    case "ADD_MAILING_LIST":
      return action.payload
    default:
      return state
  }
}