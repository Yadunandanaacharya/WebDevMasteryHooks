import { useEffect, useState } from "react";
import Block from "./Block"

function District({money}){

 return (
    <div>
        <h1>This is District Gov component</h1>
        <Block money={money} />
    </div>
 );
}

export default District;