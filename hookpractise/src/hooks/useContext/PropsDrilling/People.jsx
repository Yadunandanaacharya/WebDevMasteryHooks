import { useContext } from "react";
import MyContext from "../MyContext";

const People = () =>{
 const firstMyContext =  useContext(MyContext);
 console.log(firstMyContext);
 return (
    <div>
        {/* <h1>This is People Gov component and money is {firstMyContext.money} </h1>
        <h1>counter is {firstMyContext.counter} </h1>
        <button onClick={()=>firstMyContext.setCounter(firstMyContext.counter + 1)}>Increase counter</button> */}
    </div>
 );
}
 
export default People;