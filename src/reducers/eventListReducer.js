export default (state=[],action)=>{
    switch(action.type){
        case "EVENT_LIST":
            return action.payload;
        default:
            return state;
    }
}