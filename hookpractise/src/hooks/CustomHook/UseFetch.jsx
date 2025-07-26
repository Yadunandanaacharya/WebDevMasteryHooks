import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new error("Failed to fetch data")
                }

                const result = await response.json()
                setData(result)
                setError(null)
            }
            catch (error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
        };

        fetchData();
    },[url]);

    return {data,loading,error};
}

export default UseFetch;