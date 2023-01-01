import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Container, Row, Col,Stack } from "react-bootstrap";
import profilePic from "./assets/images/profilePic.jpg"

const Post = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const {postId} = useParams();
    useEffect( () => {
        fetch(`http://localhost:8000/posts/` + postId)
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
                setError("error in fetching post data");
                console.log("error in fetching post data");
            })
            //add .catch for err here 

    }, []);

    return ( 
    <div>

        {error && <div>{error}</div> }
        {loading && <div>Page is still loading hol up....</div> }
        {/* possible add in breadcrumbs on top of the page */}
        {data && 
        <Container fluid className="postContainer">
            <Row className="flex-nowrap postRow">
                <Col className="postSideBar">left placeholder</Col>
                <Col className="postMiddleBar" xs={8}>
                    <Stack gap={2}>
                        <div className="postTitleDiv">
                            <h1 className="postTitle">{data.title}</h1>
                            <h2 className="postUser">Submitted by user {data.authorId}</h2>
                            <hr className="lineBreak"/>
                            <p className="postContent">{data.body}</p>
                        </div>
                        <div className="postContentDiv">
                        </div>
                        <div className="commentSection">
                            <h3 className="commentHeader">Comments:</h3>
                            <div className="individualCommentDiv">
                                <div className="commentUser">
                                    <img src={profilePic} className="profilePic" />
                                    <p>forum_user</p>
                                </div>
                                <div className="commentBody">
                                    <p className="timestamp">Posted 10hrs ago</p>
                                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </Stack>
                </Col>
                <Col className="postSideBar">right placeholder</Col>
            </Row>
        </Container>
        }
    </div> 
    
    );
}
 
export default Post;