import React from "react"

const Nav = () => {

    const Links = [
        "Sobre mí",
        "Proyectos",
        "Habilidades",
        "Certificaciones"
     ]

   
    return(
        <nav className=" text-white flex justify-center mt-4 font-medium">
            <ul className="flex gap-3 bg-black text-lg py-2 px-4 rounded-full">
                {
                    Links.map((link, index) => (
                        <li className="px-3 py-1 rounded-full hover:bg-zinc-800 transition-colors" key={index}><a href="">{link}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav