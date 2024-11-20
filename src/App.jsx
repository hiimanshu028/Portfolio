import BlurBackground from "./components/BlurBackground"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

const App = () => {
  return (
    <>
    <BlurBackground />
    <Navbar />
    <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <Navbar />
      <Hero />
      <Projects />
    </main>
    </>
  )
}

export default App
