import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import { useState } from "react";

const App = () => {
    const [postID, setPostID] = useState("");

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/blog/" element={<Home />} />
                <Route path="/blog/all" element={<AllPosts setPostID={setPostID} />} />
                <Route path="/blog/about" element={<About />} />
                <Route path="/blog/all/*" element={<SinglePost postID={postID} />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
