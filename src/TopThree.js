
const TopThree = ({posts}) => {
    posts = Array.from(posts);

    const topN = (arr, n) => {
        if(n > arr.length){
           return false;
        }
        return arr
        .slice()
        .sort((a, b) => {
           return b.votes - a.votes
        })
        .slice(0, n);
    };

    //filters for top 3 highest posts 
    const filtered = topN(posts, 3);

    return (  
        <div className="topThreePosts list-group" >
            {filtered.map(post => (
                <a key={post.id} href="/pages:id" className="list-group-item list-group-item-action active topThreePost" aria-current="true">
                    <div className="d-flex w-100 justify-content-between ">
                        <h5 className="mb-1">{post.title}</h5>
                        <small>Submitted by {post.authorId} on {post.date}</small>
                    </div>
                    <div style={{display: "flex"}}>
                        <p className="mb-1">{post.body}</p>
                        <div className="votingButtons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <p className="votebox">{post.votes}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div>
                    </div>
                    <small>TODO: add in how many comments</small>
                </a>
            ))}

        </div>
    );
}
 
export default TopThree;

//import links to actual post 