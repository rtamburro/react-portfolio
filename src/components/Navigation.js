import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'
import { NavLink } from "react-router-dom"
import pdf from '../documents/resume.pdf'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    
    
    return (
        <div>
            <nav className="md:hidden">
                <svg onClick={() => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff105e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                {
                    maskTransitions((styles, item) =>
                        item && 
                        <animated.div 
                        style={styles}
                        className="fixed top-0 left-0 z-50 w-full h-full bg-blueGray-t-50"
                        onClick={() => setShowMenu(false)}>
                        </animated.div>
                    )
                }       

                {
                    menuTransitions((styles, item) => 
                        item && 
                        <animated.div
                        style={styles}
                        className="fixed top-0 left-0 z-50 w-4/5 h-full p-3 shadow bg-blueGray-900">
                        <NavigationMenu />
                        </animated.div>
                    )
                }
             </nav>
             <nav className="hidden md:text-xl lg:text-2xl text-neonPink md:flex md:justify-end">
                <NavLink to="/projects" activeClassName="text-green-300" className="inline-flex items-center px-4 my-8 rounded hover:text-green-300 ">
                    Projects
                </NavLink>
                <NavLink to="/about" activeClassName="text-green-300" className="inline-flex items-center px-4 py-3 my-8 rounded hover:text-green-300 ">
                    About
                </NavLink>
                <NavLink to="/contact" activeClassName="text-green-300" className="inline-flex items-center px-4 py-3 my-8 rounded hover:text-green-300 ">
                    Contact
                </NavLink>
                <a href={pdf} rel="noopener noreferrer" target="_blank" activeClassName="text-green-300" className="inline-flex items-center px-4 my-8 border-2 border-green-300 rounded hover:text-green-300">Resume</a>
            </nav>
        </div>
    )
}

export default Navigation