import { useParams } from "react-router";
import useFetch from "./useFetch";


const ThreadPage = () => {

    const { threadId } = useParams();
    console.log(`http://localhost:8000/indiv_threads/get/` + threadId);
    const { data, loading, error } = useFetch(`http://localhost:8000/indiv_threads/get/` + threadId);


    return ( 
        <div>
            <p>this is the page for all the posts in a thread</p>
        </div>
     );
}
 
export default ThreadPage;