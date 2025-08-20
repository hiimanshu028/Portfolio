import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stack from "./components/Stack"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />        
        <Stack />
        <Education />        
        <Projects />
        <Contacts />
      </main>
    </>
  )
}

export default App
