import { useEffect, useState } from "react";

const SinglePost = (props) => {
    const [singlePost, setSinglePost] = useState({});

    const getSinglePost = async () => {
        const response = await fetch(`http://localhost:5200/api/v1/posts/${props.postID}`);
        const data = await response.json();
        setSinglePost(data);
    };

    useEffect(() => {
        try {
            getSinglePost();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        singlePost.post && (
            <div className="single-post">
                <h1 className="single-post-title">{singlePost.post.title}</h1>
                <p className="single-post-content">{singlePost.post.text}</p>
            </div>
        )
    );
};
export default SinglePost;
