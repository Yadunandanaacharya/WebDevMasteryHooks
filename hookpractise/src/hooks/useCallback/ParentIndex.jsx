import { useState, useMemo, useCallback } from "react";
import ChildButton from "./ChildButton";

function ParentIndex() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    // const handleClick = () => {
    //     setCount(count + 1);
    // }

    const handleClick = useCallback(()=>{
        setCount(count + 1);
    },[]);

    return (
        <div style={{background:darkMode ? "#333" : "#fff",
            color:darkMode ? "#fff" : "#333"
        }}>
            <h1>Count: {count}</h1>
            <ChildButton onClick={handleClick}/>
            <button onClick={()=> setDarkMode(!darkMode)}>
                Toggle theme
            </button>

        </div>
    );
}

export default ParentIndex;