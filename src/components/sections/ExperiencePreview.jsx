import '../../styles/experience.css'
import experience from '../../data/experience'
import Reveal from '../ui/Reveal.jsx'
import { Link } from 'react-router-dom'

function ExperiencePreview() {
  return (
    <section className="experience section">
      <div className="container">
        <Reveal direction="left">
          <div className="experience__intro">
            <p className="experience__eyebrow">Experience</p>
            <h2 className="section-title">
              Building practical software through real commercial experience.
            </h2>
            <p className="section-text">
              Two roles building and maintaining production systems — internal business tools,
              full-stack web applications, and cloud-focused engineering.
            </p>
          </div>
        </Reveal>

        <div className="experience__timeline">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <article className="experience__card">
                <div className="experience__top">
                  <div className="experience__header">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="experience__logo"
                    />
                    <div>
                      <h3 className="experience__role">{item.role}</h3>
                      <p className="experience__company">
                        {item.company} · {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="experience__period">{item.period}</span>
                </div>

                <p className="experience__description">{item.summary}</p>

                <div className="experience__tech">
                  {item.tech.map((t) => (
                    <span key={t} className="experience__tag">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="experience__footer">
            <Link to="/experience" className="btn btn-secondary">
              View Full Experience →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ExperiencePreview
