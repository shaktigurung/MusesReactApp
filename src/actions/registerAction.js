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

export const loginUser = (data) => {
  return async (dispatch) => {
    let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/auth/login`, data)

    if (response.status === 200) {
      sessionStorage.setItem("token", response.data.token)
    }
    dispatch({
      type: "LOGIN_USER",
      payload: response.data
    })
  }
}

export const updateUser = (formData, token) => {
  return async(dispatch, getState) => {
    let response = await axios.patch(`${process.env.REACT_APP_BACK_END_DOMAIN}/auth/login`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

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

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem("token")

    dispatch({
      type: "LOGOUT"
    })
  }
}

// export const loginUser = ({name, email}) => {
//   return
// }