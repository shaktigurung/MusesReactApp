import LocalApi from "./../apis/local";

export const getChapters = () => {
  return async (dispatch) => {
    let response = await LocalApi.get("/chapter");
    dispatch({
      type: "CHAPTER_LIST",
      payload: response.data
    })
  }
}

export const selectChapter = (chapter) => {
  return {
    type: "SELECTED_CHAPTER",
    chapterId: chapter._id
  }
}

export const updateOrganisers = (formData, id, token) => {
  return async (dispatch) => {
    let response = await LocalApi.put(`/chapter/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "CHAPTER_LIST",
      payload: response.data
    })
  }
}

export const createChapter = ({ city }, token) => {
  return async (dispatch) => {
    let response = await LocalApi.post("/chapter", { city }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "CREATE_CHAPTER",
      payload: response.data
    });
  }
}

export const removeChapter = (chapterId, token) => {
  return async (dispatch) => {
    let response = await LocalApi.delete(`/chapter/${chapterId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "REMOVE_CHAPTER",
      payload: response.data
    });
  }
}