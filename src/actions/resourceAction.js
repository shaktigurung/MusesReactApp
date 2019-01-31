import LocalApi from "./../apis/local";

export const getResources = () => {
  return async (dispatch) => {
    const response = await LocalApi.get("/resources");

    dispatch({
      type: "RESOURCES_LIST",
      payload: response.data
    });
  }
}

export const createResource = ({ title, description, link }, token) => {
  return async (dispatch) => {
    let response = await LocalApi.post("/resources", { title, description, link }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "RESOURCES_LIST",
      payload: response.data
    });
  }
}

export const removeResource = (id, token) => {
  return async (dispatch) => {
    let response = await LocalApi.delete(`/resources/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "REMOVE_RESOURCE",
      payload: response.data
    });
  }
}