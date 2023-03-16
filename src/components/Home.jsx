import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    const [latestPosts, setLatestPosts] = useState({});

    const selectPost = (e) => {
        props.setPostID(e.currentTarget.dataset.id);
    };

    const getLatestPosts = async () => {
        const response = await fetch("http://localhost:3000/api/v1/posts/latest");
        const data = await response.json();
        setLatestPosts(data);
    };
    useEffect(() => {
        try {
            getLatestPosts();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Quill & Verse</h1>
                <h2>Where every word is a brushstroke and every sentence a masterpiece...</h2>
            </header>
            <main>
                <h1>LATEST POSTS</h1>
                {latestPosts.posts &&
                    latestPosts.posts.map((post) => {
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
                            </Link>
                        );
                    })}
            </main>
        </div>
    );
};
export default Home;
