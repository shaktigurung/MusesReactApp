import LocalApi from '../apis/local'
import axios from 'axios'

export const createUser = (formData) => {
  return async(dispatch, getState) => {
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/auth/register`, formData)
    sessionStorage.setItem("token", response.data.token)

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

export const updateUser = (formData) => {
  return async(dispatch, getState) => {
    let response = await axios.patch(`${process.env.REACT_APP_BACK_END_DOMAIN}/auth/login`, formData)

    dispatch({
      type: "UPDATE_USER",
      payload: response.data
    })
  }
}

// export const loginUser = ({name, email}) => {
//   return
// }