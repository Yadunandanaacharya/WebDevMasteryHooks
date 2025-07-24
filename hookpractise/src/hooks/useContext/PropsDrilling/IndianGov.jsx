import { useEffect, useState } from "react";
import StateGov from "./StateGov"

function IndianGov(){
    const money = 100;
 return (
    <div>
        <h1>This is Indian Gov component</h1>
        <StateGov money={money} />
    </div>
 );
}

export default IndianGov;