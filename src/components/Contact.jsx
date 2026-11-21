const githubUrl = 'https://github.com/matheusfelixgaldino-ai'
const linkedInUrl = 'https://www.linkedin.com/in/matheus-felix-galdino-3262a8264'
const emailAddress = 'matheusfelixgaldino@gmail.com'
const whatsappMessage = 'Olá, Matheus! Encontrei seu portfólio e gostaria de conversar sobre uma oportunidade profissional.'
const whatsappLink = `https://wa.me/5511960324580?text=${encodeURIComponent(whatsappMessage)}`

function ContactIcon({ type }) {
  const iconPaths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    linkedin: <><path d="M7 9v8M7 6v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 10v7" /><rect x="3" y="3" width="18" height="18" rx="3" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.7 1.4a13 13 0 0 0-6.7 0C5.8 1.2 4.6 1.6 4.6 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></>,
    whatsapp: <><path d="M20.4 11.6a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-4.1a8.2 8.2 0 1 1 15.2-4.3Z" /><path d="M9 8.5c.2-.5.4-.5.7-.5h.4c.2 0 .3.1.4.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1.1-.2-2.4-.9-3.7-2.1-1.1-1-1.9-2.3-2.1-3.4-.2-.9 0-1.6.4-2.1Z" /></>,
  }

  return <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[type]}</svg>
}

export default function Contact() {
  return (
    <section className="section section-contact" id="contato" aria-labelledby="contact-title" data-reveal>
      <div className="section-shell contact-panel">
        <div className="contact-orb" aria-hidden="true" />
        <div className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> CONTATO</p>
          <h2 id="contact-title">Toda boa jornada<br />começa com um <span>oi.</span></h2>
          <p>Estou aberto a conversas sobre estágio, tecnologia e oportunidades para aprender e colaborar.</p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <ContactIcon type="whatsapp" />
            <span><small>WHATSAPP</small><span>Conversar pelo WhatsApp</span></span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-link" href={`mailto:${emailAddress}`}>
            <ContactIcon type="email" />
            <span><small>E-MAIL</small><span>Enviar e-mail</span><span className="contact-detail">{emailAddress}</span></span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <ContactIcon type="linkedin" />
            <span><small>LINKEDIN</small><span>Meu LinkedIn</span></span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
            <ContactIcon type="github" />
            <span><small>GITHUB</small><span>matheusfelixgaldino-ai</span></span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
