import React from "react";

const Link =  ({text, href , children})  => {
    return (
        <a className="bg-zinc-700 flex justify-center gap-2 w-32 opacity-95 text-xl px-4 py-2 rounded-full hover:scale-110 transition-transform" href={href}>{children}{text}</a>
    )
} 


export default Link