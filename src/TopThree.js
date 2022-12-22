
const TopThree = ({posts}) => {
    posts = Array.from(posts);

    return (  
        <div className="topThreePosts list-group" >
            {/* stop gap measure for now, replace map with filter for actual filtering of posts */}
            {posts.map(post => (
                // <div className="list-group">
                //     <h1>{post.title}</h1>
                //     <h2>{post.body}</h2>
                //     <h3>Submitted by [author name by right] on {post.date}</h3>
                // </div>

                <a href="/pages:id" className="list-group-item list-group-item-action active topThreePost" aria-current="true">
                    <div className="d-flex w-100 justify-content-between ">
                        <h5 className="mb-1">{post.title}</h5>
                        <small>Submitted by [author name by right] on {post.date}</small>
                    </div>
                    <p className="mb-1">{post.body}</p>
                    <small>NIL</small>
                </a>
            ))}

        </div>
    );
}
 
export default TopThree;

//import links to actual post 