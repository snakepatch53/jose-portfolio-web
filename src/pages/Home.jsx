import { useState } from "react";
import info from "../../data.json";
import SectionNavBar from "../components/SectionNavBar";
import SectionHero from "../components/SectionHero";
import SectionSkills from "../components/SectionSkills";
import SectionWorks from "../components/SectionWorks";
import SectionResume from "../components/SectionResume";
import SectionContact from "../components/SectionContact";
import SectionFooter from "../components/SectionFooter";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }
    return (
        <>
            <SectionNavBar info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SectionHero info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SectionSkills info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SectionWorks info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SectionResume info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SectionContact info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SectionFooter info={info} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
};

export default Home;
