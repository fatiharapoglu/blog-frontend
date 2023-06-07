import { useEffect, useState } from "react";

import NewComment from "./NewComment";
import Loading from "./Loading";
import FormatDate from "./FormatDate";

const SinglePost = (props) => {
    const [singlePost, setSinglePost] = useState({});
    const [comments, setComments] = useState({});
    const [len, setLen] = useState(0); // this is useless, just for re-render
    const [isLoading, setIsLoading] = useState(true);

    const getSinglePost = async () => {
        const response = await fetch(`https://express-blog-api.cyclic.app/api/v1/posts/${props.postID}`);
        const data = await response.json();
        setSinglePost(data);
    };

    const getComments = async () => {
        const response = await fetch(`https://express-blog-api.cyclic.app/api/v1/posts/${props.postID}/comments`);
        const data = await response.json();
        setComments(data);
        setIsLoading(false);
    };

    useEffect(() => {
        try {
            getSinglePost();
            getComments();
        } catch (err) {
            console.log(err);
        }
    }, [len]);

    if (isLoading) return <Loading />;

    return (
        <div className="single-post-container">
            {singlePost.post && (
                <div className="single-post">
                    <h1 className="single-post-title">{singlePost.post.title}</h1>
                    <p className="single-post-content">{singlePost.post.text}</p>
                    <p className="single-post-date">
                        <FormatDate date={singlePost.post.timestamp} />
                    </p>
                    <p className="single-post-author">Fatih Arapoğlu</p>
                </div>
            )}
            <NewComment postID={props.postID} setLen={setLen} handleSnackbar={props.handleSnackbar} />
            {comments.comments && (
                <div className="comment-container">
                    {comments.comments.map((comment) => {
                        return (
                            <ul key={comment._id} className="comment">
                                <div className="comment-main">
                                    <h3>{comment.username}</h3>
                                    <p>{comment.text}</p>
                                </div>
                                <div className="comment-date">
                                    <FormatDate date={comment.timestamp} />
                                </div>
                            </ul>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SinglePost;
