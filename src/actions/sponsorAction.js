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

export const createSponsor = ({ name, description, website, image }, token) => {
  return async (dispatch) => {
    let response = await LocalApi.post('/sponsor', { name, description, website, image }, {
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

export const updateSponsor = (formData, sponsorId, token) => {
  return async (dispatch) => {
    let response = await LocalApi.patch(`/sponsor/${sponsorId}`, formData, {
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