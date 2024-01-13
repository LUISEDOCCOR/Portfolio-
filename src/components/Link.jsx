import React, { useState } from "react";

const Arrow = ({isHidden}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${isHidden ? 'hidden' : 'block'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    )
}

const Link =  ({text, href , children, color, fontSize})  => {

    const [isHidden, setHidden] = useState(true)

    return (
        <a 
        target="_blank" 
        onMouseEnter={() => {setHidden(false)}} 
        onMouseLeave={() => {setHidden(true)}} 
        className={`${color ? color : 'bg-zinc-700'} ${fontSize ? fontSize : 'text-xl'} flex justify-center gap-1 min-w-40 opacity-95 px-4 py-2 rounded-full transition-transform hover:scale-105 `} 
        href={href}
        >
            <div className="flex gap-2 px-1 items-center">
                {children}{text}
            </div>
            <Arrow isHidden={isHidden}/>
        </a>
    )
}   


export default Link