import LocalApi from "./../apis/local";

export const getUsers = (token, chapterId) => {
  return async (dispatch) => {
    const response = await LocalApi.get(`/auth/users?city=${chapterId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({
      type: "USERSBYCHAPTER_LIST",
      payload: response.data
    });
  }
}