import React from "react";


const AboutMe = ({}) => {
    return(
        <article className="text-white space-y-4">
            <img src="../../public/luisimg.webp" alt="Luis Ed Perfil" className="w-16 rounded-full"/>
            <div className="space-y-3">
                <h1 className="text-5xl font-semibold">Hey, soy Luis Eduardo</h1>
                <h2 className="text-3xl">
                    +1 de experiencia. 
                    <span className="text-yellow-200"> Desarrollador Front-end y Back-End.</span>
                    <span className="text-teal-200"> Programador autodidacta.</span>
                    <span className="text-fuchsia-200"> Entusiasta en la programación.</span>
                </h2>
            </div>
        </article>
    )
}

export default AboutMe  