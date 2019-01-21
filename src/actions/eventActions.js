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
