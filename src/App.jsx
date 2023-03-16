import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import NotFound from "./components/NotFound";

const App = () => {
    const [postID, setPostID] = useState("");

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/blog/" element={<Home setPostID={setPostID} />} />
                <Route path="/blog/all" element={<AllPosts setPostID={setPostID} />} />
                <Route path="/blog/about" element={<About />} />
                <Route path="/blog/all/*" element={<SinglePost postID={postID} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
