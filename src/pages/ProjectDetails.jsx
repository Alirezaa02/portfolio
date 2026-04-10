import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import Reveal from '../components/ui/Reveal.jsx'
import '../styles/project-details.css'

function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="section-title">Project not found</h1>
          <Link to="/projects" className="btn btn-secondary" style={{ marginTop: 24, display: 'inline-flex' }}>
            ← Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <div className="container">

        {/* Back link */}
        <Reveal>
          <Link to="/projects" className="pd-back">← Back to Projects</Link>
        </Reveal>

        {/* Hero banner */}
        <Reveal delay={0.05}>
          <div className="pd-hero">
            <div className="pd-hero__glow" />
            <div className="pd-hero__content">
              <p className="pd-hero__category">{project.category}</p>
              <h1 className="pd-hero__title">{project.title}</h1>
              <p className="pd-hero__description">{project.description}</p>

              <div className="pd-hero__meta">
                <div className="pd-meta-item">
                  <span className="pd-meta-label">Role</span>
                  <span className="pd-meta-value">{project.role}</span>
                </div>
                <div className="pd-meta-item">
                  <span className="pd-meta-label">Year</span>
                  <span className="pd-meta-value">{project.year}</span>
                </div>
                <div className="pd-meta-item">
                  <span className="pd-meta-label">Stack</span>
                  <span className="pd-meta-value">{project.tech.join(', ')}</span>
                </div>
              </div>

              <div className="pd-hero__tech">
                {project.tech.map(t => (
                  <span key={t} className="pd-tech-tag">{t}</span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary pd-github-btn"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <div className="pd-body">

          {/* Overview */}
          <Reveal direction="left" delay={0.05}>
            <section className="pd-section">
              <h2 className="pd-section__title">Overview</h2>
              <p className="pd-section__text">{project.overview}</p>
            </section>
          </Reveal>

          {/* Highlights */}
          <Reveal direction="right" delay={0.05}>
            <section className="pd-section">
              <h2 className="pd-section__title">Key Features & Contributions</h2>
              <ul className="pd-list">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    className="pd-list__item"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Learnings */}
          <Reveal direction="up" delay={0.05}>
            <section className="pd-section">
              <h2 className="pd-section__title">What I Learned</h2>
              <div className="pd-learnings">
                {project.learnings.map((l, i) => (
                  <motion.div
                    key={i}
                    className="pd-learning-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="pd-learning-num">0{i + 1}</span>
                    <p className="pd-learning-text">{l}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Tech stack */}
          <Reveal direction="up" delay={0.05}>
            <section className="pd-section">
              <h2 className="pd-section__title">Tech Stack</h2>
              <div className="pd-stack">
                {project.tech.map((t, i) => (
                  <motion.div
                    key={t}
                    className="pd-stack__item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
            </section>
          </Reveal>

        </div>

        {/* Footer nav */}
        <Reveal>
          <div className="pd-footer">
            <Link to="/projects" className="btn btn-secondary">← All Projects</Link>
            <Link to="/contact" className="btn btn-primary">Work With Me →</Link>
          </div>
        </Reveal>

      </div>
    </main>
  )
}

export default ProjectDetails
