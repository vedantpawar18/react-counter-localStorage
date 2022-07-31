import { loadData, saveData } from "../Utils/accessLocalStorage";
import * as types from "./actionTypes"
// or // import { INCREMENT } from "./actionTypes";


const initalState ={
    counter:loadData("counter") || 5
}

const reducer = (oldState = initalState, action) =>{
    switch(action.type)
    {
        case types.INCREMENT :
            let newCountInc= oldState.counter+action.payload
            saveData("counter", newCountInc)
            return {...oldState, counter: newCountInc};
        case types.DECREMENT :
            let newCountDec= oldState.counter-action.payload
            saveData("counter", newCountDec)
            return {...oldState, counter: newCountDec};
        default:
            return oldState;
    }
}

export default reducer;