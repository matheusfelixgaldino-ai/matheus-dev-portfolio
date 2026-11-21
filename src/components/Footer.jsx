const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="brand footer-brand" href="#inicio" aria-label="Matheus.dev — voltar ao início">
          <span className="brand-mark" aria-hidden="true"><span>M</span><span>F</span></span><span>Matheus<span className="brand-dot">.dev</span></span>
        </a>
        <p>Feito com curiosidade por Matheus <span aria-hidden="true">✳</span></p>
        <nav aria-label="Navegação do rodapé">
          {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <a className="back-top" href="#inicio" aria-label="Voltar ao início">↑</a>
      </div>
    </footer>
  )
}
