import { NavLink } from "react-router-dom"
import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import pdf from '../documents/resume.pdf'

export default function NavigationMenu () {
    const [showMenu, setShowMenu] = useState(false);

    const menuRemoval = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(0%)' },
        enter: { opacity: 1, transform: 'translateX(-100%)' },
        leave: { opacity: 0, transform: 'translateX(0%)' },
    })

    return (
        <div className="flex flex-col items-center mx-auto text-xl m-28 lg:flex lg:items-center lg:justify-between">
            <ul className="items-center mx-auto text-center text-neonPink">
                <li><NavLink to="/home" onClick={() => setShowMenu(!showMenu)} activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 rounded hover:text-green-300 ">
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
                <li><a href={pdf} activeClassName="text-green-300" className="inline-flex items-center px-3 py-3 my-8 border-2 rounded hover:border-green-300 border-neonPink hover:text-green-300 ">
                        Resume
                    </a></li>
            </ul>
            {
                    menuRemoval((styles, item) =>
                        item && 
                        <animated.div 
                        style={styles}
                        className="fixed top-0 left-0 z-50 w-full h-full bg-blueGray-t-50"
                        onClick={() => setShowMenu(false)}>
                        </animated.div>
                    )
                }  
        </div>
    )
}