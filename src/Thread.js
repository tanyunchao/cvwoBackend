//individual thread cards for Threads page under each header
//individual threads are passed in as props thru Threads.js
import { Card } from "react-bootstrap";
import useFetch from "./useFetch";

const Thread = ({groupId}) => {

    console.log(`http://localhost:8000/thread_group/children/` + groupId);
    const { data, loading, error } = useFetch(`http://localhost:8000/thread_group/children/` + groupId);

    const { data: commentCounter, loading: load2, error: error2 } = useFetch(`http://localhost:8000/thread_group/comment_count/` + groupId);

    return ( 
        <div>
            {loading && <p>page is still loading...</p> }
            { error && <p>{error.message}</p> }
            {data && data.map(thread => (
                <Card style={{width: "70%"}} className="threadCard" key={thread.id}>
                    {console.log("hello")}
                    <Card.Title>                    
                        {thread.name + ' '} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                        </svg>
                    </Card.Title>
                    {commentCounter && 
                        <Card.Subtitle>Number of posts in thread: {commentCounter}</Card.Subtitle>
                    }
                </Card>
            ))}
        </div>

    );
}
 
export default Thread;