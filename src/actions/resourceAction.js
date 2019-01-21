import LocalApi from "../apis/local";

export const getResourcesList = () => {
  return async (dispatch) => {
    const response = await LocalApi.get("/resources");
    dispatch({
      type: "RESOURCES_LIST",
      payload: response.data

    })
  }
}