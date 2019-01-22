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

export const setAuthToken = (data) => {
  sessionStorage.setItem("token", data.token)

  return {
    type: "AUTH_TOKEN",
    payload: data
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

export const refreshUser = (token) => {
  return async(dispatch) => {
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/auth/refresh`, {}, {headers: {
      Authorization: `Bearer ${token}`
    }})
    sessionStorage.setItem("token", response.data.token)

    dispatch({
      type: "REFRESH_USER",
      payload: response.data
    })
  }
}

// export const loginUser = ({name, email}) => {
//   return
// }