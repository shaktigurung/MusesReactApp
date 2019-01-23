import axios from "axios";
require('dotenv').config();

export const getEvents = ()=>{
    return async (dispatch) => {
        const events = await axios.get(`${process.env.REACT_APP_BACK_END_DOMAIN}/events`);
        dispatch({
            type: "EVENT_LIST",
            payload: events.data
        })
    }
    
}

export const createEvent = ({image,title, description, date, location, chapter,sponsors, type, approved}, token) =>{
    return async (dispatch , getState)=>{
        let events = await axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/events`, {image, title, description, location, date, chapter,sponsors, type, approved}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        dispatch(
            {
                type: "EVENT_CREATE",
                payload: events.data
            }
        );
    }
}
