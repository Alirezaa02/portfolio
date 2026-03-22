import About from '../components/sections/About.jsx'
import ExperiencePreview from '../components/sections/ExperiencePreview.jsx'
import Hero from '../components/sections/Hero.jsx'
import ProjectsPreview from '../components/sections/ProjectsPreview.jsx'
import Skills from '../components/sections/Skills.jsx'
import ContactCTA from '../components/sections/ContactCTA.jsx'

function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Skills/>
      <ProjectsPreview />
      <ExperiencePreview/>
      <ContactCTA/>
    </main>
  )
}

export default Home