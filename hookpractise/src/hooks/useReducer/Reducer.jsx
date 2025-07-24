import { useReducer, useState } from "react";

const counterReducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT' :
            return {count : state.count + 1};
        case 'DECREMENT' :
            return {count : state.count - 1};
        default : return state;
    }
}

function Reducer(){
    const [state, dispatch] = useReducer(counterReducer,{count:0})
 return (
    <div>
        <h1>count value {state.count}</h1>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>INCREMENT</button>
        <button onClick={()=> dispatch({type:'DECREMENT'})}>INCREMENT</button>
    </div>
 );
}

export default Reducer;