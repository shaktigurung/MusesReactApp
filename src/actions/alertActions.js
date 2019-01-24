export const setAlert = (alert) => {
  return (dispatch) => {
    dispatch({
      type: "SET_ALERT",
      payload: alert
    })
  }
}