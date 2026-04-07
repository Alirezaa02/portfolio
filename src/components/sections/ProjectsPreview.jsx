import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import '../../styles/projects.css'
import Reveal from '../ui/Reveal.jsx'

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

        <Reveal delay={0.1}>
          <div className="projects__grid">
            {featuredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__meta">
                  {project.role} · {project.year}
                </p>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__tech">
                  {project.tech.map((item) => (
                    <span key={item} className="project-card__tag">
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="project-card__link"
                >
                  View Project →
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ProjectsPreview