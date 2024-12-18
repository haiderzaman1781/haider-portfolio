import { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import logo from "../assest/logo.png";
import "../index.css";
import "../main.js"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved theme
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || false; // Default to light mode if not set
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        // Save theme to localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <>
            <nav className="navbar-main">
                <div className="main-navbar bg-[#131F22] shadow-lg shadow-[#131F22] dark:shadow-white flex flex-wrap items-center justify-around mx-auto lg:p-4 ">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img className="w-[50px]" src={logo} alt="" />
                    </NavLink>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                        onClick={toggleMenu}
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <div
                        className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
                        id="navbar-default"
                    >
                        <ul className={`flex flex-col md:flex-row md:space-x-8 ${isOpen ? "bg-[#131F22]" : ""}`}>
                            <li>
                                <NavLink
                                    to="/"
                                    className=" navlink block py-2 cursor-pointer px-3 text-gray-400 dark:text-white hover:text-gray-200 focus:text-gray-200 rounded hover:bg-[#94a883]  focus:bg-[#94a883] "
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/work"
                                    className=" navlink block py-2 cursor-pointer px-3 text-gray-400 dark:text-white hover:text-gray-200 rounded focus:text-gray-200 hover:bg-[#94a883] focus:bg-[#94a883]"
                                >
                                    Work
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className=" navlink block py-2 cursor-pointer px-3 text-gray-400 dark:text-white hover:text-gray-200 rounded focus:text-gray-200 hover:bg-[#94a883] focus:bg-[#94a883]"
                                >
                                    About me
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/skill"
                                    className=" navlink block py-2 cursor-pointer px-3 text-gray-400 dark:text-white hover:text-gray-200 rounded focus:text-gray-200 hover:bg-[#94a883] focus:bg-[#94a883]"
                                >
                                    Skill's
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink
                                    to="/contact"
                                    className=" navlink block py-2 cursor-pointer px-3 text-gray-400 dark:text-white hover:text-gray-200 rounded focus:text-gray-200 hover:bg-[#94a883] focus:bg-[#94a883]"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" id="toggle-btn" onClick={toggleTheme} className="sr-only peer "/>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
                    </label>




                </div>
            </nav>
        </>
    );
};

export default Navbar;
