import { languages, techSkills, toolSkills, practices } from '../../data/skills'
import '../../styles/skills.css'
import Reveal from '../ui/Reveal.jsx'

function Skills() {
  return (
    <section className="skills section">
      <div className="container">
        <Reveal>
          <div className="skills__intro">
            <p className="skills__eyebrow">Skills</p>
            <h2 className="section-title">
              Tools and technologies I use to build modern software.
            </h2>
            <p className="section-text">
              My work spans frontend development, backend systems, and cloud-focused
              tools, with an emphasis on practical implementation and clean structure.
            </p>
          </div>
        </Reveal>

        {/* Language proficiency bars */}
        <Reveal delay={0.1}>
          <div className="skills__lang-section">
            <h3 className="skills__section-heading">Programming Languages</h3>
            <div className="skills__lang-list">
              {languages.map((lang) => (
                <div key={lang.name} className="skills__lang-item">
                  <div className="skills__lang-header">
                    <span className="skills__lang-name">{lang.name}</span>
                    <span className="skills__lang-level">{lang.level}%</span>
                  </div>
                  <div className="skills__lang-bar">
                    <div
                      className="skills__lang-fill"
                      style={{ '--fill-width': `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tech icon grid */}
        <Reveal delay={0.15}>
          <div className="skills__section-heading-wrap">
            <h3 className="skills__section-heading">Frameworks & Technologies</h3>
          </div>
          <div className="skills__groups">
            {techSkills.map((group) => (
              <article key={group.category} className="skills__group">
                <h4 className="skills__group-title">{group.category}</h4>
                <div className="skills__items">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="skills__item">
                      <img src={skill.icon} alt={skill.name} className="skills__icon" />
                      <span className="skills__name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Tools & additional skills */}
        <Reveal delay={0.2}>
          <div className="skills__section-heading-wrap">
            <h3 className="skills__section-heading">Tools & Platforms</h3>
          </div>
          <div className="skills__tools">
            {toolSkills.map((tool) => (
              <span key={tool.name} className="skills__tool-tag">{tool.name}</span>
            ))}
          </div>
        </Reveal>

        {/* Practices */}
        <Reveal delay={0.25}>
          <div className="skills__section-heading-wrap">
            <h3 className="skills__section-heading">Practices</h3>
          </div>
          <div className="skills__tools">
            {practices.map((p) => (
              <span key={p} className="skills__practice-tag">{p}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
