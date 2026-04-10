import { useState, useEffect } from 'react'
import staticProjects from '../data/projects'
import '../styles/projects.css'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import API from '../lib/api'

function parseTech(tech) {
  if (Array.isArray(tech)) return tech
  if (!tech) return []
  return tech.split(',').map(t => t.trim()).filter(Boolean)
}

function useProjects() {
  const [projects, setProjects] = useState(staticProjects)

  useEffect(() => {
    fetch(`${API}/projects/`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data.map(p => ({ ...p, tech: parseTech(p.tech) })))
        }
      })
      .catch(() => {/* keep static fallback */})
  }, [])

  return projects
}

function Projects() {
  const projects = useProjects()

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
            <Reveal key={project.id || project.slug} delay={index * 0.1}>
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
