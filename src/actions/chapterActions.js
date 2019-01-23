import LocalApi from "./../apis/local";

export const getChapters = () => {
  return async (dispatch) => {
    const response = await LocalApi.get("/chapter");
    dispatch({
      type: "CHAPTER_LIST",
      payload: response.data

    })
  }
}

export const selectChapter = (chapterId) => {
  return {
    type: "SELECTED_CHAPTER",
    chapterId: chapterId
  }
}