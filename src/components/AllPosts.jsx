import { useEffect, useState } from "react";

const AllPosts = () => {
    const [posts, setPosts] = useState({});

    const getAllPosts = async () => {
        const response = await fetch("http://localhost:5200/api/v1/posts");
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        try {
            getAllPosts();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            <h1 className="title">ALL POSTS</h1>
            <div className="posts">
                {posts.posts &&
                    posts.posts.map((post) => {
                        return (
                            <div key={post._id} className="post">
                                <h1 className="post-title">{post.title}</h1>
                                <p className="post-content">{post.text}</p>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
export default AllPosts;
