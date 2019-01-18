import axios from 'axios'

export const createUser = (formData) => {
  return async(dispatch, getState) => {
    console.log(formData.get("email"))
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/auth/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    dispatch({
      type: "REGISTER_POST",
      payload: response.data
    })
  }
}

export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token)

  return {
    type: "AUTH_TOKEN",
    payload: token
  }
}

// export const loginUser = ({name, email}) => {
//   return
// }