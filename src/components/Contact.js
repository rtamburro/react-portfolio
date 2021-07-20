import React from "react"

export default function Contact() {
    return (
        <main className="min-h-screen bg-blueGray-900">
            <div className="hidden md:flex md:flex-col md:items-center">
                <div className="p-5 mt-56 border-2 md:mt-32 border-neonPink">
                    <a href="mailto:ronnie.tamburro@protonmail.com" className="justify-center text-6xl text-white hover:text-green-300">Get In Touch</a>
                </div>
                <p className="mt-20 text-2xl text-white md:text-center md:ml-40 md:mr-40">Whether you have questions or just want to say hi, my inbox is always open. I will get back to you ASAP!</p>
            </div>
            
            <div className="pt-36 md:hidden lg:hidden xl:hidden 2xl:hidden">
                <ul className="flex flex-col items-center justify-end h-full space-y-4 text-white">
                    <a href="https://github.com/rtamburro" rel="noopener noreferrer" target="_blank"><li className=""><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-neonPink hover:stroke-current hover:text-green-300 icon icon-tabler icon-tabler-brand-github" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg></li></a>
                    <a href="https://www.linkedin.com/in/ronnie-tamburro-b79296202/" rel="noopener noreferrer" target="_blank"><li className=""><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-neonPink hover:stroke-current hover:text-green-300 icon icon-tabler icon-tabler-brand-linkedin" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="8" y1="11" x2="8" y2="16" />
                        <line x1="8" y1="8" x2="8" y2="8.01" /><line x1="12" y1="16" x2="12" y2="11" /><path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg></li></a>
                    <a href="mailto:ronnie.tamburro@protonmail.com" rel="noopener noreferrer" target="_blank"><li className=""><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-neonPink hover:stroke-current hover:text-green-300 icon icon-tabler icon-tabler-mail" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" />
                    </svg></li></a>
                    <div className="w-px pt-20 mt-10 h-36 bg-neonPink "></div>
                </ul>
            </div>
        </main>
        
    )
}