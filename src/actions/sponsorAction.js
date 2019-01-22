import axios from 'axios'

export const getSponsors = () => {
  return async(dispatch) => {
    let response = await axios.get(`${process.env.REACT_APP_BACK_END_DOMAIN}/sponsor`)
    console.log(response)
    dispatch({
      type: "GET_SPONSORS",
      payload: response.data
    })
  }
}