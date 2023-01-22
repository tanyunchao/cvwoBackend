import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw Error('could not fetch data for resource')
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                // setError(err);
                setLoading(false);
                setError(err.message);
                console.log("error in fetching thread data");
            })
            //add .catch for err here 

    }, [url]); // add vars inside that if changed, would rerun use effect

    return { data, loading, error}
}

export default useFetch;