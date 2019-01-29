import axios from "axios";

export const getEvents = ()=>{
    return async (dispatch) => {
        const events = await axios.get(`${process.env.REACT_APP_BACK_END_DOMAIN}/events`);
        dispatch({
            type: "EVENT_LIST",
            payload: events.data
        })
    }
    
}

export const createEvent = (formData, token) =>{
    return async (dispatch , getState)=>{
        let response = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/events`,formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        dispatch(
            {
                type: "EVENT_CREATE",
                payload: response.data
            }
        );
    }
}
//Edit Event
export const editEvent = (formData, token, id) =>{
    return async (dispatch , getState)=>{
        for(var value of formData.values()){
            console.log(value);
        }
        let response = await axios.put(`${process.env.REACT_APP_BACK_END_DOMAIN}/events/${id}`,formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        dispatch(
            {
                type: "EVENT_EDIT",
                payload: response.data
            }
        );
    }
}
//Delete Event
export const deleteEvent = (id, token) =>{
    return async (dispatch , getState)=>{
         await axios.delete(`${process.env.REACT_APP_BACK_END_DOMAIN}/events/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        dispatch(
            {
                type: "EVENT_DELETE",
                payload: id
            }
        );
    }
    
}


