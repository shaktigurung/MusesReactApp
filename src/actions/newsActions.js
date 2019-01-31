import axios from "axios"

export const getNews = (formData) => {
  return async(dispatch) => {
    let response = await axios.get(`${process.env.REACT_APP_BACK_END_DOMAIN}/news`)

    dispatch({
      type: "GET_NEWS",
      payload: response.data
    })
  }
}

export const createNews = (formData, token) => {
  return async(dispatch) => {
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/news`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch({
      type: "CREATE_NEWS",
      payload: response.data
    })
  }
}

export const updateNews = (formData, token) => {
  return async (dispatch) => {
    let response = await axios.patch(`${process.env.REACT_APP_BACK_END_DOMAIN}/news`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch({
      type: "UPDATE_NEWS",
      payload: response.data
    })
  }
}