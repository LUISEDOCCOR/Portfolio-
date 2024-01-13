import React from "react"


// "Sobre mí",
//         "Proyectos",
//         "Habilidades",
//         "Certificaciones"

const Nav = () => {

    const Links = [
        {
            'text': 'Sobre mí',
            'to': '#aboutMe'
        },
        {
            'text': 'Proyectos',
            'to': '#projects'
        },
        {
            'text': 'Habilidades',
            'to': '#skills'
        },
        {
            'text': 'Certificaciones',
            'to': '#certifications'
        },
     ]

   
    return(
        <nav className=" text-white flex justify-center mt-4 font-medium">
            <ul className="flex gap-3 bg-black text-lg py-2 px-4 rounded-full">
                {
                    Links.map((link, index) => (
                        <li className="px-3 py-1 rounded-full hover:bg-zinc-800 transition-colors" key={index}><a href={link.to}>{link.text}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav