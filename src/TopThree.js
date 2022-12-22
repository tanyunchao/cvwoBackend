
const TopThree = ({posts}) => {
    posts = Array.from(posts);

    return (  
        <div className="posts">
            {/* stop gap measure for now, replace map with filter for actual filtering of posts */}
            {posts.map(post => (
                <div className="post">
                    <h1>{post.title}</h1>
                    <h2>{post.body}</h2>
                    <h3>Submitted by [author name by right] on {post.date}</h3>
                </div>
            ))}

            {/* <h1>{console.log(Array.isArray(Array.from(posts)))}</h1> */}
        </div>
    );
}
 
export default TopThree;

//import links to actual post 