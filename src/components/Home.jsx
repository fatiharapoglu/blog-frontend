import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import FormatDate from "./FormatDate";

const Home = (props) => {
    const [latestPosts, setLatestPosts] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const selectPost = (e) => {
        props.setPostID(e.currentTarget.dataset.id);
    };

    const getLatestPosts = async () => {
        const response = await fetch("https://express-blog-api.cyclic.app/api/v1/posts/latest");
        const data = await response.json();
        setLatestPosts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        try {
            getLatestPosts();
        } catch (err) {
            console.log(err);
        }
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Quill & Verse</h1>
                <h4>Where every word is a brushstroke and every sentence a masterpiece...</h4>
            </header>
            <h1 className="title">LATEST POSTS</h1>
            <main className="posts">
                {latestPosts.posts &&
                    latestPosts.posts.map((post) => {
                        return (
                            <Link
                                to={`/all/${post._id}`}
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
        </div>
    );
};

export default Home;
