import { useEffect, useState } from "react";
import MyContext from "./MyContext"

function MoneyState(props){
    const money = 1000;
    const [counter, setCounter] = useState(0);
    const person = {
        age:28,
        name:"yadu",
        email:"yest@gmail.com"
    };

 return (
    <MyContext.Provider value={{money,person,counter,setCounter}}>
        {props.children}
    </MyContext.Provider>
 );
}

export default MoneyState;