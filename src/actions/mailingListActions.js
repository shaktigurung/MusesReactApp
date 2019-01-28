import axios from 'axios'

export const postMailingList = (formValues) => {
  return async(dispatch) => {
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/mailinglist`, formValues)

    dispatch({
      type: "ADD_MAILING_LIST",
      payload: response.data
    })
  }
}