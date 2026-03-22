import About from '../components/sections/About.jsx'
import ExperiencePreview from '../components/sections/ExperiencePreview.jsx'
import Hero from '../components/sections/Hero.jsx'
import ProjectsPreview from '../components/sections/ProjectsPreview.jsx'

function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <ProjectsPreview />
      <ExperiencePreview/>
    </main>
  )
}

export default Home