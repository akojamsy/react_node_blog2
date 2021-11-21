import './post.css'

function Post() {
    return (
        <div className="post">
            <img src="images/celebration.jpeg" alt="postImage" className="postImage" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit.</span><hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Deleniti quam unde quod quasi ea neque at! Ipsam aperiam beatae reiciendis! 
                Voluptates, totam doloribus? Provident praesentium cupiditate eaque ab ratione 
                mollitia accusantium. 
                Aliquid ipsum perspiciatis voluptates nemo voluptate dolore laborum dolor?
            </p>
        </div>
    )
}

export default Post
