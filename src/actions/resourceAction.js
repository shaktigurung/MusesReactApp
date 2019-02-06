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

export const removeResource = (resourceId, token) => {
  return async (dispatch) => {
     await LocalApi.delete(`/resources/${resourceId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "REMOVE_RESOURCE",
      resourceId: resourceId,
    });
  }
}

export const updateResource = (formData, resourceId, token) => {
  return async (dispatch) => {
    let response = await LocalApi.patch(`/resources/${resourceId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "UPDATE_RESOURCE",
      payload: response.data,
    })
  }
}