export default (state=[],action)=>{
    switch(action.type){
        case "EVENT_LIST":
            return action.payload;
        case "EVENT_CREATE":
            return [...state, action.payload];
        default:
            return state;
    }
}