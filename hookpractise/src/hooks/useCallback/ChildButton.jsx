import React from "react";

const ChildButton = React.memo(({onClick}) => {
    console.log("ChildButton child component re renders when parent component toggle them button clicked ");
    return (
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    );
})

export default ChildButton;