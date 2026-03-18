import projects from '../data/projects'
import '../styles/projects.css'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Projects</h1>

        <p className="section-text">
          A selection of projects demonstrating full-stack development,
          system design, and modern UI engineering.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>

              <p className="project-desc">{project.description}</p>

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
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects