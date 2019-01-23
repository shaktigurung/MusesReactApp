import axios from 'axios'

export const getSponsors = () => {
  return async(dispatch) => {
    let response = await axios.get(`${process.env.REACT_APP_BACK_END_DOMAIN}/sponsor`)
    dispatch({
      type: "GET_SPONSORS",
      payload: response.data
    })
  }
}

export const createSponsor = (formData, token) => {
  return async(dispatch) => {
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/sponsor`, formData, {headers: {
      Authorization: `Bearer ${token}`
    }})

    dispatch({
      type: "CREATE_SPONSOR",
      payload: response.data
    })
  }
}