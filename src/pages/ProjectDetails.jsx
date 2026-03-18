import { useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">{project.title}</h1>

        <p className="section-text">{project.description}</p>
      </div>
    </main>
  )
}

export default ProjectDetails