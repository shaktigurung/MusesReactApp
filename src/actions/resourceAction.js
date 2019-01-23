import LocalApi from "./../apis/local";

export const getResources = () => {
  return async (dispatch) => {
    let response = await LocalApi.get("/resources");

    dispatch({
      type: "RESOURCES_LIST",
      payload: response.data

    });
  }
}
