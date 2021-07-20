import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavigationMenu () {
    return (
        <div className="flex flex-col items-center mx-auto text-xl m-28 lg:flex lg:items-center lg:justify-between">
            <ul className="items-center mx-auto list-decimal text-neonPink">
                <li><NavLink to="/home" activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 rounded hover:text-green-300 ">
                        Home
                    </NavLink></li>
                <li><NavLink to="/projects" activeClassName="text-green-300" className="inline-flex items-center px-3 my-8 rounded hover:text-green-300 ">
                        Projects
                    </NavLink></li>
                <li><NavLink to="/about" activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 rounded hover:text-green-300 ">
                        About
                    </NavLink></li>
                <li><NavLink to="/contact" activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 rounded hover:text-green-300 ">
                        Contact
                    </NavLink></li>
            </ul>
        </div>
    )
}