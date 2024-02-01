import React, { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Work from "../components/Work";
import info from "../../data.json";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }
    return (
        <>
            <NavBar info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Skills info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Work info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Resume info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Contact info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Footer info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
};

export default Home;
