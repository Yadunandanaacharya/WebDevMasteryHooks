import { useEffect, useLayoutEffect, useState } from "react";

function ChangeBackColor(){
 const [color, setColor] = useState('lightblue');
 
//  useLayoutEffect(()=>{
 useEffect(()=>{
    document.body.style.backgroundColor = color;
 },[color]);

 return (
    <div style={{textAlign:"center",padding:"20px"}}>
        <h2>Current background color is {color}</h2>
        <button onClick={() =>setColor("lightcoral")}>Red</button>
    </div>
 );
}

export default ChangeBackColor;