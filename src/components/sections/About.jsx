import '../../styles/about.css'
import Reveal from '../ui/Reveal.jsx'

function About() {
  return (
    <section className="about section">
      <div className="container">
        <Reveal>
          <div className="about__grid">
            <div className="about__content">
              <p className="about__eyebrow">About Me</p>

              <h2 className="section-title">
                Final-year Software Engineering student with hands-on commercial experience.
              </h2>

              <p className="section-text">
                I'm a final-year Software Engineering student at QUT with hands-on experience
                building and maintaining production web applications across two commercial roles.
                Proficient in C#, Python, JavaScript, and SQL, with practical exposure to React,
                REST API integration, and agile workflows.
              </p>

              <p className="section-text">
                I'm experienced in translating business requirements into working software, debugging
                production systems, and collaborating within cross-functional teams. I'm seeking
                software engineering or software developer roles to continue contributing technical
                skills while growing professionally.
              </p>

              <div className="about__meta">
                <div className="about__meta-item">
                  <span className="about__meta-label">Location</span>
                  <span className="about__meta-value">Brisbane, QLD</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">Education</span>
                  <span className="about__meta-value">QUT — Software Engineering</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">Status</span>
                  <span className="about__meta-value about__meta-value--open">Open to Opportunities</span>
                </div>
              </div>
            </div>

            <div className="about__cards">
              <article className="about__card">
                <h3 className="about__card-title">Full-Stack Development</h3>
                <p className="about__card-text">
                  Comfortable working across frontend (React, Vue.js), backend (Python, C#, .NET), and cloud infrastructure.
                </p>
              </article>

              <article className="about__card">
                <h3 className="about__card-title">Production Experience</h3>
                <p className="about__card-text">
                  Two commercial roles building and maintaining live systems — not just side projects.
                </p>
              </article>

              <article className="about__card">
                <h3 className="about__card-title">Business-Oriented Thinking</h3>
                <p className="about__card-text">
                  Experienced in translating real business requirements into practical, maintainable software solutions.
                </p>
              </article>

              <article className="about__card">
                <h3 className="about__card-title">Agile & Collaborative</h3>
                <p className="about__card-text">
                  Practised in code reviews, Git branching workflows, sprint cadences, and writing clear technical documentation.
                </p>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
