import React from "react"
import { NavLink } from "react-router-dom"


export default function NavBar() {
    return (
        <header className="text-xl bg-blueGray-900">
            <div className="flex justify-between w-full">
                <nav className="flex ml-20 text-neonPink">
                    <NavLink to="/" exact className="inline-flex items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon stroke-current text-neonPink hover:stroke-current hover:text-green-300 icon-tabler icon-tabler-letter-r" width="62" height="62" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
                            <line x1="12" y1="13" x2="17" y2="20" />
                        </svg>
                    </NavLink>
                </nav>
                <nav className="flex justify-end mr-20 text-neonPink">
                    <NavLink to="/projects" activeClassName="text-green-300" className="inline-flex items-center px-3 my-8 rounded hover:text-green-300 ">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 rounded hover:text-green-300 ">
                        About
                    </NavLink>
                    <NavLink to="/contact" activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 rounded hover:text-green-300 ">
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
} 