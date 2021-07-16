import React from "react"

export default function Contact() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-blueGray-900">
            <div className="p-5 mt-56 border-2 border-neonPink">
                <a href="mailto:ronnie.tamburro@protonmail.com" className="justify-center text-6xl text-white hover:text-green-300">Get In Touch</a>
            </div>
            <p className="mt-20 text-2xl text-white">Whether you have questions or just want to say hi, my inbox is always open. I will get back to you ASAP!</p>
        </main>
        
    )
}