import { useEffect, useState } from "react";
import Panchayat from "./Panchayat"

function Block({money}){

 return (
    <div>
        <h1>This is Block Gov component</h1>
        <Panchayat money={money} />
    </div>
 );
}

export default Block;