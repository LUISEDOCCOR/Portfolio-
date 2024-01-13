import React from "react";
import Section from "../components/Section";

const certifications = [
    {
        'name': 'Crea páginas web con HTML y CSS',
        'text': 'Curso sobre cómo crear y maquetar páginas usando HTML y CSS',
        'link': 'https://www.mastermind.ac/certificates/67103e6b5b66470480a38a5f773caed1'
    },
    {
        'name': '¡Linux: de Noob a Pro en 9 horas!',
        'text': 'Sistemas operativos basados en Debian Linux.',
        'link': 'https://www.mastermind.ac/certificates/33290ab05fc14ed99e72c73613469b96'
    },
    {
        'name': 'Todo sobre la web con PHP',
        'text': 'Curso sobre cómo crear páginas usando PHP y MySQL',
        'link': 'https://www.mastermind.ac/certificates/5448a06270fa4afdb8da70dabe1f2ce8'
    },
    {
        'name': 'Frontend con HTML, CSS y JS',
        'text': 'Curso sobre cómo crear páginas usando HTML, CSS y JS',
        'link': 'https://www.mastermind.ac/certificates/551bc00405864777873a31006c8b55b5'
    },
    {
        'name': 'Master en Python: Aprender Python 3, Django, Flask y Tkinter',
        'text': 'Curso sobre backend con django',
        'link': 'https://udemy-certificate.s3.amazonaws.com/image/UC-d39174ac-83e2-4138-925a-16d4458b585b.jpg?v=1703626184000'
    }
]

const Certifications = () => {
    return (
       <Section text="Certificaciones" items={certifications} type="certifications">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
       </Section>
    )
}


export default Certifications