import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import FormatDate from "./FormatDate";

const AllPosts = (props) => {
    const [posts, setPosts] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getAllPosts = async () => {
        const response = await fetch("http://localhost:3000/api/v1/posts/published");
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
    };

    const selectPost = (e) => {
        props.setPostID(e.currentTarget.dataset.id);
    };

    useEffect(() => {
        try {
            getAllPosts();
        } catch (err) {
            console.log(err);
        }
    }, []);

    if (isLoading) return <Loading />;

    return (
        <>
            <h1 className="title">ALL POSTS</h1>
            <main className="posts">
                {posts.posts &&
                    posts.posts.map((post) => {
                        return (
                            <Link
                                to={`/blog/all/${post._id}`}
                                key={post._id}
                                className="post"
                                data-id={post._id}
                                onClick={selectPost}
                            >
                                <h1 className="post-title">{post.title}</h1>
                                <p className="post-content">{post.text}</p>
                                <p className="post-date">
                                    <FormatDate date={post.timestamp} />
                                </p>
                            </Link>
                        );
                    })}
            </main>
        </>
    );
};

export default AllPosts;
