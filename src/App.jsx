import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/blog/" element={<Home />} />
                <Route path="/blog/all" element={<AllPosts />} />
                <Route path="/blog/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
