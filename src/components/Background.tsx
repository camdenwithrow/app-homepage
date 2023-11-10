import React from "react"

interface BackgroundProps {
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-screen pb-24 relative text-slate-200 bg-slate-500/40">
            <div className="absolute inset-0 -z-50 bg-center bg-cover bg-hero"></div>
            <div className="absolute top-0 left-0 right-0 h-96 -z-40  bg-gradient-to-t from-transparent to-slate-900"></div>
            {children}
        </div>
    )
}

export default Background