import '../../src/styles/experience.css'

const experienceItems = [
  {
    role: 'Software Developer',
    company: 'Atlas Blind & Curtain',
    period: 'Current',
    description:
      'Working on internal tools, business systems, and software solutions with a focus on clean functionality and practical outcomes.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Elite Dev',
    period: 'Previous',
    description:
      'Contributed to frontend and development tasks, strengthening skills in responsive UI, modern tooling, and web-based product development.',
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