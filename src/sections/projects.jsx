import React from "react";
import Section from "../components/Section";

const projects = [
    {   
        'name': 'Calculadora con React',
        'text': 'Calculadora React: Simple y eficiente para operaciones matemáticas básicas en la web.',
        'link': 'https://reactappcalculadora.netlify.app/',
        'code': 'https://github.com/LUISEDOCCOR/react-calculator', 
    },
    {   
        'name': 'To Do App',
        'text': 'To-Do App con arrastrar y soltar (drag and drop) en Vanilla JavaScript',
        'link': 'https://apptododragdrop.netlify.app/',
        'code': 'https://github.com/LUISEDOCCOR/app-to-do-drag-drop',
    },
    {   
        'name': 'To Do App React',
        'text': 'To-Do App en React con uso de useState, useEffect y Local Storage',
        'link': 'https://luisedoccortodoappreact.netlify.app',
        'code': 'https://github.com/LUISEDOCCOR/to-do-app-react',
    },
    {   
        'name': 'Página con Bootstrap',
        'text': 'Diseño completo con Bootstrap para una experiencia visual atractiva y funcional.',
        'link': 'https://equipouno.netlify.app',
        'code': 'https://github.com/LUISEDOCCOR/Matematicaspage',
    },
    {   
        'name': 'Tic Tac Toe',
        'text': 'Implementación del clásico juego de tres en línea utilizando HTML, CSS y JavaScript.',
        'link': 'https://tictactoegamebyjs.netlify.app/',
        'code': 'https://github.com/LUISEDOCCOR/Tic-Tac-Toe-Js', 
    }  
]


const Projects = () => {
    return (
        <Section items={projects} type="projects" text="Proyectos" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        </Section>
    )
}

export default Projects