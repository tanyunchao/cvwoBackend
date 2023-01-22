import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Thread from "./Thread";
import useFetch from "./useFetch";
//main threads page
//need to get data from json server to dynamically generate threads

const Threads = () => {

    const [activeKeys] = useState(['1', '2'])
    const { data, loading, error } = useFetch('http://localhost:8000/group_threads')
    
    return ( 
        <div>
            <h1>Main threads: </h1>
            {error && <h2>{error}</h2> }
            {loading &&  <h2>Page is loading...</h2> }
            <Accordion defaultActiveKey={activeKeys} alwaysOpen>
                
                {data && data.map(headers => (
                    <Accordion.Item className="threadHeaders" style={{marginBottom: "50px"}} eventKey={headers.threadGroupId.toString()} key={headers.threadGroupId}>
                        <Accordion.Header>{headers.threadGroupTitle}</Accordion.Header>
                        <Accordion.Body>
                            {data && <Thread threads={headers.threadsId} />}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                                
            </Accordion>
        </div>

     );
}
 
export default Threads;