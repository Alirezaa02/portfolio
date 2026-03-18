import About from '../components/sections/About.jsx'
import Hero from '../components/sections/Hero.jsx'
import ProjectsPreview from '../components/sections/ProjectsPreview.jsx'

function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <ProjectsPreview />
    </main>
  )
}

export default Home