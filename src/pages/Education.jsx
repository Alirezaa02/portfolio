import '../styles/education.css'
import education from '../data/education'
import Reveal from '../components/ui/Reveal.jsx'

function Education() {
  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <div className="education__intro">
            <p className="education__eyebrow">Education</p>
            <h1 className="section-title">Academic Background</h1>
            <p className="section-text">
              Studying Software Engineering at QUT while applying academic knowledge
              in two concurrent commercial development roles.
            </p>
          </div>
        </Reveal>

        <div className="education__timeline">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <article className="education__card">
                <div className="education__top">
                  <div className="education__left">
                    <div className="education__icon">🎓</div>
                    <div>
                      <h2 className="education__degree">{item.degree}</h2>
                      <p className="education__institution">{item.institution}</p>
                      <p className="education__location">{item.location}</p>
                    </div>
                  </div>
                  <div className="education__right">
                    <span className="education__period">{item.period}</span>
                    <span className={`education__status education__status--${item.status === 'Final Year' ? 'active' : 'done'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <ul className="education__highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="education__highlight">{h}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Education
