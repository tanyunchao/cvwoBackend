import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Thread from "./Thread";
//main threads page
//need to get data from json server to dynamically generate threads

const Threads = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeKeys] = useState(['1', '2'])

    useEffect( () => {
        fetch(`http://localhost:8000/threadGroups`)
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
                setError("error in fetching thread data");
                console.log("error in fetching thread data");
            })
            //add .catch for err here 

    }, []); // add vars inside that if changed, would rerun use effect
    
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