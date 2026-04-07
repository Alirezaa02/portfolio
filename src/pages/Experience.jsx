import '../styles/experience.css'
import experience from '../data/experience'
import Reveal from '../components/ui/Reveal.jsx'

function Experience() {
  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <div className="experience__intro">
            <p className="experience__eyebrow">Experience</p>
            <h1 className="section-title">Professional Experience</h1>
            <p className="section-text">
              Two commercial roles building and maintaining production software — internal business
              systems, full-stack web applications, and agile development workflows.
            </p>
          </div>
        </Reveal>

        <div className="experience__timeline">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <article className="experience__card experience__card--full">
                <div className="experience__top">
                  <div className="experience__header">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="experience__logo"
                    />
                    <div>
                      <h2 className="experience__role">{item.role}</h2>
                      <p className="experience__company">
                        {item.company} · {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="experience__period">{item.period}</span>
                </div>

                <p className="experience__description">{item.summary}</p>

                <ul className="experience__bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="experience__bullet">{bullet}</li>
                  ))}
                </ul>

                <div className="experience__tech">
                  {item.tech.map((t) => (
                    <span key={t} className="experience__tag">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Experience
