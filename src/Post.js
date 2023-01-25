import { useParams } from "react-router";
import { Container, Row, Col,Stack } from "react-bootstrap";
import profilePic from "./assets/images/profilePic.jpg"
import RichtextEditor from "./RichtextEditor";
import useFetch from "./useFetch";

const Post = () => {
    
    const {postId} = useParams();

    // fetch indiv posts
    const { data, loading, error } = useFetch(`http://localhost:8000/posts/` + postId);
    // fetch comments
    const { data: comments, loading: loading2, error: error2 } = useFetch(`http://localhost:8000/posts/comments/` + postId);    

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
                            <h2 className="postUser">Submitted by user {data.user_id}</h2>
                            <hr className="lineBreak"/>
                            <p className="postContent">{data.body}</p>
                        </div>
                        <br></br>
                        <div>
                            <p style={{textAlign: "left", textIndent: "1em"}}>Any thoughts?</p>
                            <RichtextEditor />
                        </div>
                        <div className="commentSection">
                            <h3 className="commentHeader">Comments:</h3>
                            { comments && 
                                comments.map(comment => (
                                    <div className="individualCommentDiv" key={comment.id}>
                                        <div className="commentUser">
                                            <img src={profilePic} alt="user profile" className="profilePic" />
                                            <p>{comment.username}</p>
                                        </div>
                                        <div className="commentBody">
                                            <p className="timestamp">Posted 10hrs ago</p>
                                            <p >{comment.body}</p>
                                        </div>
                                    </div>                                    
                                ))}

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