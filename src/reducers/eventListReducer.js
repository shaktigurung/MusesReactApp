export default (state=[],action)=>{
    switch(action.type){
        case "EVENT_LIST":
            return action.payload;
        case "EVENT_CREATE":
            return  action.payload;
        case "EVENT_EDIT":
            return  action.payload;
        default:
            return state;
    }
}