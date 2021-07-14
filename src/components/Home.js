import React from "react"


export default function Home() {
    return (
    <main className="bg-blueGray-900">
        <section className="relative flex justify-start min-h-screen px-8 pt-12 ml-20 lg:pt-36">
            <div className="">
                <h1 className="mb-8 text-2xl font-bold leading-none text-white lg:leading-snug">Hi, my name is</h1>
                <h2 className="mb-8 text-6xl font-bold text-neonPink">Ronnie</h2>
                <h1 className="mb-8 text-6xl font-bold leading-none text-white lg:leading-snug">A Self-Taught Web Developer</h1>
                <p className="w-1/2 text-xl text-white">I'm currently working through <span className="font-bold underline text-odin">The Odin Project</span> as well as a personal project when time allows. A recent accomplishment of mine is condensing my first-ever Python script from 600+ lines of code down to 24 lines!</p>
            </div>
        </section>
    </main>
    );
}