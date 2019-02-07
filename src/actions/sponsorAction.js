import LocalApi from "./../apis/local";

export const getSponsors = () => {
  return async (dispatch) => {
    let response = await LocalApi.get('/sponsor')
    dispatch({
      type: "GET_SPONSORS",
      payload: response.data
    });
  }
}

export const createSponsor = (formData, token) => {
  return async (dispatch) => {
    let response = await LocalApi.post('/sponsor', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch({
      type: "GET_SPONSORS",
      payload: response.data
    });
  }
}

export const removeSponsor = (sponsorId, token) => {
  return async (dispatch) => {
    await LocalApi.delete(`/sponsor/${sponsorId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "REMOVE_SPONSOR",
      sponsorId: sponsorId,
    });
  }
}

export const updateSponsor = (formData, token, id) => {
  return async (dispatch) => {
    let response = await LocalApi.patch(`/sponsor/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({
      type: "UPDATE_SPONSOR",
      payload: response.data,
    });
  }
}