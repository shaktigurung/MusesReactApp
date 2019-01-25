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


//{image, title, description, date, location, chapter,sponsors, type, approved}