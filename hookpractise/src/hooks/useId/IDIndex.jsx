import { useState, useTransition, useRef, useId } from "react";

const IDIndex = () => {
    const id = useId();
    return (
        <div >
            <label htmlFor={id}>
                Name: <input id={id} type="text" /> 
            </label>
        </div>
    );
}

export default IDIndex;