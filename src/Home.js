import { useEffect, useState } from "react";
import TopThree from "./TopThree";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data, loading, error } = useFetch('http://localhost:8000/posts')

    return ( 
        <div className="homeDiv">
            <h1>Top posts of the week:</h1>
            { error && <div>{error}</div> }
            { loading && <div>Page loading hol up...</div> }
            {/* {console.log(typeof data)}; */}
            {data && <TopThree posts={data} />}

        </div>
     );
}
 
export default Home;
//npx json-server --watch data/db.json --port 8000 
//npm run start