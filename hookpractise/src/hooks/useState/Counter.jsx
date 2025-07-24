import { useState } from "react";

function Counter(){
    let exCounter = 0;
 const [count, setCount] = useState(0);
 const [name, setName] = useState('ram');
 const [price, setPrice] = useState(0.1);
 const [nums, setNums] = useState([1,2,3]);

 const increment = () => {
    exCounter++;
    setCount((c)=> c + 1);
    setCount(count+1);
 }

 const decrement = () => {
    exCounter--;
    // setCount((c)=> c - 1);
    setCount(count-1);
 }

 return (
    <div>
        <h1>count is : {count}</h1>
        <h1>exCounter is : {exCounter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
 );
}

export default Counter;