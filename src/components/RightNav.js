import React from "react"

export default function RightNav() {
    return (
        <div className="fixed inset-y-0 right-0 w-10 h-full ml-auto mr-10">
            <ul className="flex flex-col items-center justify-end h-full space-y-4 text-white">
                <a href="mailto:ronnie.tamburro@protonmail.com" className="transform rotate-90 pr-60 text-neonPink">ronnie.tamburro@protonmail.com</a>
                <div className="w-px mt-10 h-36 bg-neonPink "></div>
            </ul>
            
        </div>
    )
}