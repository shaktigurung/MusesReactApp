import LocalApi from "./../apis/local";

export const getChaptersList = () => {
  return async (dispatch) => {
    const response = await LocalApi.get("/chapter");
    console.log(response);
    dispatch({
      type: "CHAPTER_LIST",
      payload: response.data

    })
  }
}