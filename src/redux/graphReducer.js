const initialState={
    data:[]
}

const graphReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FILL_DATA":
            return {...state,data:action.payload}
        default:
            return state
    }
}

export default graphReducer