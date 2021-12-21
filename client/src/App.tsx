import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import BlogList from "./components/blogList";
import Footer from "./components/footer";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <main className={"l-flex l-main-container"}>
                <AboutMe />
                <BlogList />
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;
