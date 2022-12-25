import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
//main threads page
//need to get data from json server to dynamically generate threads

const Threads = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeKeys, setActiveKeys] = useState(['1', '2'])

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
            <h1>Thread page in the works</h1>
            {error && <h2>{error}</h2> }
            <Accordion defaultActiveKey={activeKeys} alwaysOpen>
                
                {data && data.map(headers => (
                    <Accordion.Item className="threadHeaders" eventKey={headers.threadGroupId.toString()} key={headers.threadGroupId}>
                        <Accordion.Header>{headers.threadGroupTitle}</Accordion.Header>
                        <Accordion.Body>
                            <h3>Individual threads would go here</h3>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                
                
                {/* <Accordion.Item eventKey="0">
                    <Accordion.Header>SOC Academic</Accordion.Header>
                    <Accordion.Body>
                        <h3>testing values</h3>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Town Square</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
        </div>

     );
}
 
export default Threads;