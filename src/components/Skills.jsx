const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub']

const abbreviations = {
  HTML: '5',
  CSS: '3',
  JavaScript: 'JS',
  React: '⚛',
  Git: '⑂',
  GitHub: 'GH',
}

function TechnologyMark({ technology }) {
  return <span className={`technology-mark mark-${technology.toLowerCase()}`} aria-hidden="true">{abbreviations[technology]}</span>
}

export default function Skills() {
  return (
    <section className="section section-skills" id="tecnologias" aria-labelledby="skills-title" data-reveal>
      <div className="section-shell">
        <div className="section-heading skills-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> FERRAMENTAS DO DIA A DIA</p>
          <h2 id="skills-title">Tecnologias que estou <span>aprendendo.</span></h2>
          <p className="section-intro">Tecnologias com as quais tenho contato e que sigo praticando em projetos e estudos.</p>
        </div>
        <ul className="skill-list" aria-label="Tecnologias em aprendizado">
          {technologies.map((technology, index) => (
            <li className="skill-item" key={technology}>
              <span className="skill-index">0{index + 1}</span>
              <TechnologyMark technology={technology} />
              <span className="skill-name">{technology}</span>
              <span className="skill-caption">Em desenvolvimento</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
