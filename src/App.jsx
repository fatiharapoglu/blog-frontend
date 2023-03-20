import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import NotFound from "./components/NotFound";
import Snackbar from "./components/Snackbar";

const App = () => {
    const [postID, setPostID] = useState("640d0d07ab5a57d28d1f6ad3");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");

    const handleSnackbar = (text) => {
        setIsSnackbarOpen(true);
        setSnackbarText(text);
    };

    useEffect(() => {
        if (isSnackbarOpen === false) return;
        setTimeout(() => {
            setIsSnackbarOpen(false);
        }, 3000);
    }, [isSnackbarOpen]);

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home setPostID={setPostID} />} />
                <Route path="/all" element={<AllPosts setPostID={setPostID} />} />
                <Route
                    path="/all/*"
                    element={<SinglePost postID={postID} handleSnackbar={handleSnackbar} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            {isSnackbarOpen && <Snackbar snackbarText={snackbarText} />}
        </div>
    );
};

export default App;
