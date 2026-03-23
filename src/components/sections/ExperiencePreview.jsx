import '../../styles/experience.css'
import atlasLogo from '../../assets/icons/company1.png'
import eliteLogo from '../../assets/icons/elitedev.jpg'


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

function ExperiencePreview() {
  return (
    <section className="experience section">
      <div className="container">
        <div className="experience__intro">
          <p className="experience__eyebrow">Experience</p>
          <h2 className="section-title">
            Building practical software through real project and development experience.
          </h2>
          <p className="section-text">
            My experience includes contributing to internal business systems and web
            development work, with a growing focus on full-stack engineering,
            maintainable architecture, and polished user experiences.
          </p>
        </div>

        <div className="experience__timeline">
          {experienceItems.map((item, index) => (
            <article key={index} className="experience__card">
              <div className="experience__top">

            <div className="experience__header">
             <img src={item.logo} alt={item.company} className="experience__logo" />

            <div>
             <h3 className="experience__role">{item.role}</h3>
              <p className="experience__company">{item.company}</p>
            </div>
              </div>

                <span className="experience__period">{item.period}</span>
              </div>

              <p className="experience__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencePreview