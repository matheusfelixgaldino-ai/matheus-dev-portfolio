const githubUrl = 'https://github.com/matheusfelixgaldino-ai'

function CodeWindow() {
  return (
    <div className="code-window" aria-label="Ilustração decorativa de código JavaScript">
      <div className="window-topbar" aria-hidden="true">
        <span className="window-dots"><i /><i /><i /></span>
        <span className="window-file">matheus.js</span>
        <span className="window-status"><span /> online</span>
      </div>
      <div className="code-content" aria-hidden="true">
        <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">dev</span> = {'{'}</div>
        <div><span className="line-number">02</span><span className="code-indent" /><span className="code-muted">nome:</span> <span className="code-green">'Matheus'</span>,</div>
        <div><span className="line-number">03</span><span className="code-indent" /><span className="code-muted">foco:</span> <span className="code-green">'full stack'</span>,</div>
        <div><span className="line-number">04</span><span className="code-indent" /><span className="code-muted">status:</span> <span className="code-green">'aprendendo'</span>,</div>
        <div><span className="line-number">05</span><span className="code-indent" /><span className="code-muted">abertoPara:</span> <span className="code-green">'estágio'</span>,</div>
        <div><span className="line-number">06</span>{'}'}</div>
        <div className="code-comment"><span className="line-number">07</span>// cada linha é um novo começo ✨</div>
      </div>
      <div className="window-footer"><span>JavaScript</span><span>UTF-8</span></div>
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero section-shell" id="inicio" aria-labelledby="hero-title" data-reveal>
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> DESENVOLVIMENTO DE SOFTWARE</p>
        <p className="hero-greeting">Olá, eu sou <span>Matheus Felix Galdino</span></p>
        <h1 id="hero-title">Desenvolvedor Full Stack <span>em formação.</span></h1>
        <p className="hero-description">
          Estudante de Ciência da Computação no 2º semestre. Aprendo desenvolvimento web construindo projetos e busco minha primeira oportunidade de estágio em software.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#sobre">
            Sobre mim <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-quiet" href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-text" href="#contato">Entrar em contato <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-note"><span className="availability-dot" /> Ciência da Computação <span className="hero-note-divider">·</span> 2º semestre</div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-glow" />
        <CodeWindow />
        <div className="visual-caption"><span>construindo, aprendendo, evoluindo</span><span>01 — 06</span></div>
      </div>
      <a href="#sobre" className="scroll-cue" aria-label="Role para conhecer sobre mim"><span /> role para explorar</a>
    </section>
  )
}
