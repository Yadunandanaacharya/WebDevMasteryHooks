
import { useEffect, useState } from "react";
import District from "./District"

function StateGov({money}){

 return (
    <div>
        <h1>This is State Gov  component</h1>
        <District money={money}/>
    </div>
 );
}

export default StateGov;