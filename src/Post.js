import { useParams } from "react-router";

const Post = () => {

    const {postId} = useParams();

    return ( 
    <div>
        <h1>placeholder text for individual posts page</h1>
        <h3>This is for post {postId}</h3>
    </div> 
    
    );
}
 
export default Post;