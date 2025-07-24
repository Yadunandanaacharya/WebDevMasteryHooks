import { useEffect, useState } from "react";
import People from "./People"

function Panchayat({money}){

 return (
    <div>
        <h1>This is Panchayat Gov component</h1>
        <People money={money} />
    </div>
 );
}

export default Panchayat;