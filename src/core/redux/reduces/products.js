

export default function(state = [], action){
    if(action.type === "SET_BOOKS"){
        return ([
            action.payload
        ]);
    }
    return state;
}
