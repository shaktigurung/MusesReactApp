const defaultState = { token: sessionStorage.getItem("token") || null };

export default (state = defaultState, action) => {
  switch (action.type) {
    case "REGISTER_POST":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case "AUTH_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case "UPDATE_USER":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case "REFRESH_USER":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    default:
      return state
  }
}