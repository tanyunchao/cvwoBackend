import { useEffect, useState } from "react";
import TopThree from "./TopThree";

const Home = () => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch(`http://localhost:8000/posts`)
            .then((response) => {
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
                setError("error in fetching data");
                console.log("error in fetching data");
            })
            //add .catch for err here 

    }, []); // add vars inside that if changed, would rerun use effect
    
    return ( 
        <div>
            { error && <div>{error}</div> }
            { loading && <div>Page loading hol up...</div> }
            <h1>Top posts of the week:</h1>
            {/* {console.log(typeof data)}; */}
            <TopThree posts={data}/>

        </div>
     );
}
 
export default Home;
//npx json-server --watch data/db.json --port 8000 
//npm run start