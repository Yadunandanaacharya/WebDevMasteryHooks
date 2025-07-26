import { useState, useTransition } from "react";
import UseFetch from "./UseFetch";

const CustomIndex = () => {
    const {data,loading,error} = UseFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error}</p>
    return (
        <ul >
            {data.map(user => 
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    );
}

export default CustomIndex;