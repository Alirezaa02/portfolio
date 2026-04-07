import projects from '../data/projects'
import '../styles/projects.css'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <div>
            <h1 className="section-title">Projects</h1>
            <p className="section-text">
              A selection of projects demonstrating full-stack development,
              system design, and modern UI engineering.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="project-card">
                <h2 className="project-title">{project.title}</h2>

                <p className="project-card__meta">
                  {project.role} · {project.year}
                </p>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="project-link"
                >
                  View Project →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects