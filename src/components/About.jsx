export default function About() {
  return (
    <section className="section section-about" id="sobre" aria-labelledby="about-title" data-reveal>
      <div className="section-shell about-layout">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> UM POUCO SOBRE MIM</p>
          <h2 id="about-title">Tecnologia se aprende<br /><span>construindo.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            Sou estudante de <strong>Ciência da Computação</strong>, no 2º semestre, e estou aprendendo desenvolvimento Full Stack. Meu interesse está em desenvolvimento web e aplicações modernas.
          </p>
          <p>
            Gosto de conhecer novas tecnologias e evoluir por meio de projetos práticos. Busco minha primeira oportunidade de estágio para aprender em equipe e contribuir com dedicação.
          </p>
          <a className="text-link" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
