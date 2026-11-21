import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section className="section section-projects" id="projetos" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="projects-heading-row">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> FEITO COM CURIOSIDADE</p>
            <h2 id="projects-title">Projetos em <span>construção.</span></h2>
          </div>
          <p className="section-intro">Cada projeto é uma oportunidade para aprender algo novo e colocar a mão no código.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
