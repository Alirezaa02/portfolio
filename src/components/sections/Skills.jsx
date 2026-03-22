import skills from '../../data/skills'
import '../../styles/skills.css'

function Skills() {
  return (
    <section className="skills section">
      <div className="container">
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

        <div className="skills__groups">
          {skills.map((group) => (
            <article key={group.category} className="skills__group">
              <h3 className="skills__group-title">{group.category}</h3>

              <div className="skills__items">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skills__icon"
                    />
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills