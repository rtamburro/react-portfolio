import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className=" bg-gradient-to-l from-gray-700 via-gray-900 to-black">
            <div className="container flex justify-between mx-auto">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-green-300 hover:text-green-900">
                        Ronnie
                    </NavLink>
                    <NavLink to="/projects" activeClassName="text-green-100 bg-blue-700" className="inline-flex items-center px-3 py-3 my-6 text-green-200 rounded hover:text-green-900">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-green-100 bg-blue-700" className="inline-flex items-center px-3 py-3 my-6 text-green-200 rounded hover:text-green-900">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex px-3 py-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/ronnie-tamburro-b79296202/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://github.com/rtamburro" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.instagram.com/rtamburro39/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
} 