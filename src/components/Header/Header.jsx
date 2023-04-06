import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User } from 'phosphor-react';
import 'animate.css';


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
    <div className="md:hidden ">
        <nav>
        <section className=" MOBILE-MENU z-50 flex justify-between items-center px-4 lg:hidden w-full fixed bg-amber-800 shadow-gray-900/50 shadow-md">
        <div
            className="HAMBURGER-ICON p-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
            <span className="block h-0.5 my-2 w-6 bg-amber-50 rounded-md"></span>
            <span className="block h-0.5 my-2 w-6 bg-amber-50 rounded-md"></span>
            <span className="block h-0.5 my-2 w-6 bg-amber-50 rounded-md"></span>
        </div>
        <p className="py-2 px-1 font-bold text-lg text-amber-300 md:inline-block">THE SUNNY RESTAURANT</p>
        <NavLink to='/login' className="inline-block bg-amber-800 text-amber-50 hover:text-amber-300  duration-300 transition hover:scale-105 ease-in-out">
            <User size={24}  weight="bold"/>
        </NavLink>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
            className="CROSS-ICON absolute top-0 left-0 pl-5 pt-3"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
            <svg
                className="h-8 w-8 text-amber-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            </div>
            <ul className=" flex flex-col items-center justify-evenly h-full  font-bold">
            <li className="border-b border-amber-400  my-2">
                <a href="/about">MENU</a>
            </li>
            <li className="border-b border-amber-400  mb-4">
                <a href="/portfolio">SURVEY FORM</a>
            </li>
            <NavLink to='/sandwiches' className='py-2'>Sandwiches</NavLink>
            <NavLink to='/hamburgers' className='py-2'>Hamburgers</NavLink>
            <NavLink to='/pancakes' className='py-2'>Pancakes</NavLink>
            <NavLink to='/omelettes' className='py-2'>Omelettes</NavLink>
            <NavLink to='/drinks' className='py-2'>Drinks</NavLink>
            </ul>

        </div>
        </section>

        </nav>
        <style>{`
        .hideMenuNav {
        position: absolute;
        top: 0;
        left: 0;
        transition: .5s;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        /* animation: slideOutUp;  */
        padding: 20px 0;
        display: block;
        width: 0%;
        height: full;
        background: #FAEBD7;
        color: #FAEBD7;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        }
        .showMenuNav {
        position: absolute;
        top: 0;
        left: 0;      
        opacity: 1;
        visibility: visible;
        z-index: 999;
        transition: all .25s ease-in;
        padding: 20px 0;
        display: block;
        width: 100%;
        height: full;
        background: #FAEBD7;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        }
    `}</style>
    </div>
    );
}