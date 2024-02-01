import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Button from "./Button";

export default function SectionNavBar({ info, toggleDarkMode, darkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleNav = (name) => {
        setIsOpen(!isOpen);
        setActiveIndex(name === activeIndex ? null : name);
    };
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed z-30 top-0 w-full mx-auto ${
                scrollPosition > 0 ? `bg-[var(--c6-bg)] shadow-md` : "bg-transparent"
            }`}
        >
            <div className="relative w-full h-full py-5 sm:py-4">
                <div className="absolute inset-0 backdrop-blur-md" />
                <nav className="relative z-10 container m-auto flex items-center justify-between">
                    <div data-aos="fade-down" className="logo">
                        <Link
                            onClick={() => window.scrollTo(0, 0)}
                            to="/"
                            className="text-3xl font-bold sm:text-3xl text-[var(--c6-txt)] text-nowrap"
                        >
                            {info.name}
                        </Link>
                    </div>
                    <div data-aos="fade-down" className="nav-items flex items-center space-x-11">
                        {/* hamburger */}
                        <button
                            onClick={toggleNav}
                            className="relative z-10 cursor-pointer text-2xl hidden md:block text-[var(--c6-txt)]"
                        >
                            <HiMenu size={25} />
                        </button>

                        <ul
                            className={`flex items-center gap-5 justify-center ${
                                !isOpen ? "md:flex" : "md:right-[0%]"
                            } md:flex-col md:fixed m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-[var(--c1-bg)] `}
                        >
                            <NavItem name="home" activeIndex={activeIndex} toggleNav={toggleNav} />
                            <NavItem
                                name="skills"
                                activeIndex={activeIndex}
                                toggleNav={toggleNav}
                            />
                            <NavItem name="works" activeIndex={activeIndex} toggleNav={toggleNav} />
                            <NavItem
                                name="resume"
                                activeIndex={activeIndex}
                                toggleNav={toggleNav}
                            />
                            <NavItem
                                name="contact"
                                activeIndex={activeIndex}
                                toggleNav={toggleNav}
                            />
                            <Button
                                style="1"
                                name="Contáctame"
                                href="#contact"
                                className="opacity-80 hover:opacity-100"
                            />
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

function NavItem({ name, activeIndex, toggleNav }) {
    return (
        <li className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
            <a
                onClick={() => toggleNav(name)}
                href={`#${name}`}
                className={`uppercase cursor-pointer text-[var(--c6-txt)] font-bold ${
                    name === activeIndex
                        ? "text-[var(--c6-txt2)] opacity-100"
                        : "opacity-70 hover:opacity-100"
                }`}
            >
                {name}
            </a>
        </li>
    );
}
