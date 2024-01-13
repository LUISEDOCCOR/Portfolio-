import React from "react"
import '@fontsource-variable/onest';
// sections
import AboutMe from "./sections/aboutMe"
//  Components
import Nav from "./components/Nav";
function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <header>
            <Nav/>
        </header>
        <main className="mx-auto mt-28 max-w-3xl">
          <AboutMe/>
        </main>
    </div>
  )
}

export default App
