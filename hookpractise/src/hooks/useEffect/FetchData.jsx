import { useEffect, useState } from "react";

function FetchData(){
 const [count, setCount] = useState(0);
 
 useEffect(()=>{
    const fetchDataFromApi = async() => {
        const api = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await api.json();
        
        console.log(result);
    };

    fetchDataFromApi()
 },[])

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

export default FetchData;