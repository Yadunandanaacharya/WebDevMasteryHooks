import { useEffect, useState } from "react";

function Counter1(){
 const [count, setCount] = useState(0);
 
 useEffect(()=>{
    console.log("useeffect runs");
    document.title=count;
 },[count])

 const increment = () => {
    setCount(count+1);
 }

 const decrement = () => {
    setCount(count-1);
 }

 return (
    <div>
        <h1>count is : {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
 );
}

export default Counter1;