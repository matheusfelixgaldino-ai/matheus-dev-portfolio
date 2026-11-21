function hasValidUrl(value) {
  try {
    return ['https:', 'http:'].includes(new URL(value).protocol)
  } catch {
    return false
  }
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-art" aria-hidden="true">
        <div className="project-art-grid" />
        <span className="project-art-mark">{project.name.slice(0, 1)}</span>
        <span className="project-art-label">PROJETO 0{index + 1}</span>
        <span className="project-art-spark">✳</span>
      </div>
      <div className="project-info">
        <div className="project-topline">
          <span className="project-status"><i />{project.status}</span>
          <span className="project-number">0{index + 1}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tech-stack">
          <span className="project-tech-label">Tecnologias</span>
          {project.technologies?.length > 0 ? (
            <ul className="project-tags" aria-label={`Tecnologias relacionadas a ${project.name}`}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          ) : <span className="project-tech-pending">Stack a confirmar</span>}
        </div>
        <div className="project-actions">
          {hasValidUrl(project.codeUrl) && (
            <a className="project-link" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              Ver código <span aria-hidden="true">↗</span>
            </a>
          )}
          {hasValidUrl(project.demoUrl) && (
            <a className="project-link project-link-secondary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Demonstração <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
