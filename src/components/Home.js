import React from "react"


export default function Home() {
    return (
    <main className="min-h-screen bg-blueGray-900 md:p-20">
        <section className="flex flex-col pt-20 ml-6 mr-6 text-left md:pt-2">
                <h1 className="pb-3 text-white md:text-2xl text-md ">Hi, my name is</h1>
                <h2 className="pb-3 text-4xl font-bold md:text-6xl text-neonPink">Ronnie Tamburro</h2>
                <h1 className="pb-6 font-bold text-white md:text-2xl text-md">A Self-Taught Web Developer</h1>
                <p className="text-sm text-white md:text-lg">I'm currently working through <a href="https://www.theodinproject.com/home" rel="noopener noreferrer" target="_blank"><span className="font-bold border-b-2 border-cyan-300 text-odin">The Odin Project</span></a> as well as a personal project when time allows. A recent accomplishment of mine is condensing my first-ever Python script from 600+ lines of code down to 24 lines!</p>
        </section>
        <div className="w-1/2 p-3 mt-10 ml-6 text-center border-2 rounded md:hidden border-neonPink">
            <a href="mailto:ronnie.tamburro@protonmail.com" className="justify-center text-white text-md hover:text-green-300">Get In Touch</a>
        </div>
    </main>
    );
}