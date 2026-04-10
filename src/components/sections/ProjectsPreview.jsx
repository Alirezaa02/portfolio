import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import '../../styles/projects.css'
import Reveal from '../ui/Reveal.jsx'

const gradients = [
  'linear-gradient(135deg, #1e3a5f 0%, #0f2027 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
]
const gradientIcons = ['🤖', '📡']

function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="projects">
      <div className="container">
        <Reveal>
          <div className="projects__intro">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-text">
              Selected work highlighting full-stack development, software design,
              and modern product-focused engineering.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid" style={{ marginTop: '40px' }}>
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="project-card">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-card__image" />
                ) : (
                  <div
                    className="project-card__gradient"
                    style={{ background: gradients[index % gradients.length] }}
                  >
                    {gradientIcons[index % gradientIcons.length]}
                  </div>
                )}

                <div className="project-card__body">
                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-card__meta">
                    {project.role} · {project.year}
                  </p>

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.tech.map((item) => (
                      <span key={item} className="project-tag">{item}</span>
                    ))}
                  </div>

                  <Link to={`/projects/${project.slug}`} className="project-link">
                    View Project →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
