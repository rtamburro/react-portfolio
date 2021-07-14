import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-blueGray-900">
            <div className="container flex justify-between mx-auto">
                <nav className="flex text-neonPink">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest ">
                        Ronnie
                    </NavLink>
                    <NavLink to="/projects" activeClassName="text-white" className="inline-flex items-center px-3 my-8 rounded ">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white" className="inline-flex items-center px-3 py-3 my-8 rounded ">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex px-3 py-3 my-6">
                    <p className="pr-4 mt-2 text-white ">Contact</p>
                    <SocialIcon url="https://github.com/rtamburro" className="mr-4" target="_blank" fgColor="#fff" style={{height:40, width:40}} />
                    <SocialIcon url="https://www.linkedin.com/in/ronnie-tamburro-b79296202/" className="mr-4" target="_blank" fgColor="#fff" style={{height:40, width:40}} />
                    <a href="mailto:ronnie.tamburro@protonmail.com"><SocialIcon network="email" className="mr-4" target="_blank" fgColor="#fff" style={{height:40, width:40}} /></a>
                </div>
            </div>
        </header>
    )
} 