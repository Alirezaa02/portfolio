import '../../src/styles/experience.css'
import atlasLogo from '../assets/icons/company1.png'
import eliteLogo from '../assets/icons/elitedev.jpg'

const experienceItems = [
  {
    role: 'Software Developer',
    company: 'Atlas Blind & Curtain',
    period: 'Current',
    logo: atlasLogo,
    description:
      'Contributing to internal software systems and business-focused tools, with an emphasis on practical workflow improvements, maintainable code, and reliable functionality.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Elite Dev',
    period: 'Previous',
    logo: eliteLogo,
    description:
      'Supported frontend and web development tasks, building experience in responsive interfaces, modern tooling, and collaborative product development.',
  },
]

function Experience() {
  return (
    <main className="section">
      <div className="container">
        <div className="experience__intro">
          <h1 className="section-title">Experience</h1>
          <p className="section-text">
            A growing foundation in software development through practical work,
            internal systems, and modern web engineering.
          </p>
        </div>

        <div className="experience__timeline">
          {experienceItems.map((item, index) => (
            <article key={index} className="experience__card">
              <div className="experience__top">
                <div>
                  <h2 className="experience__role">{item.role}</h2>
                  <p className="experience__company">{item.company}</p>
                </div>

                <span className="experience__period">{item.period}</span>
              </div>

              <p className="experience__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Experience