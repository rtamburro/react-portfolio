import React from "react"
import image from "../magma.jpg"

export default function Home() {
    return (
    <main>
        <img src={image} alt="magma" className="absolute object-cover w-full h-full" />
        <section className="relative flex justify-center min-h-screen px-8 pt-12 lg:pt-64">
            <h1 className="text-6xl font-bold leading-none text-white lg:leading-snug">Hello, I'm Ronnie.</h1>
        </section>
    </main>
    );
}