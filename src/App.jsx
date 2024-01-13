import React from "react"
import '@fontsource-variable/onest';
// sections
import AboutMe from "./sections/aboutMe"
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Certifications from "./sections/certifications";
//  Components
import Nav from "./components/Nav";
function App() {
  return (
    <>
        <header className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <Nav/>
        </header>
        <main className="mx-auto mt-72 mb-36 max-w-3xl">
          <AboutMe/>
          <Projects/>
          <Skills/>
          <Certifications/>
        </main>
        <footer className="max-w-3xl mx-auto text-white py-8 flex justify-between">
          <span className="font-semibold text-lg text-yellow-200">Luis Eduardo Ocegueda Cortes ✨</span>
          <span className="font-semibold text-lg text-fuchsia-200">2024</span>
        </footer>
    </>
  )
}

export default App
