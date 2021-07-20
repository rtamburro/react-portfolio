import React from "react"
import { NavLink } from "react-router-dom"
import Navigation from './Navigation'


export default function NavBar() {
    return (
        <header className="z-50 flex items-center justify-between p-5 bg-blueGray-900">
            <NavLink to="/" exact className="">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon stroke-current w-12 h-12 text-neonPink hover:stroke-current hover:text-green-300 icon-tabler icon-tabler-letter-r" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
                <line x1="12" y1="13" x2="17" y2="20" />
            </svg>
            </NavLink>
            <Navigation />
        </header>
    )
} 