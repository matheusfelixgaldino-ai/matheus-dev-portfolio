import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const navigation = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Sobre mim', href: '#sobre', id: 'sobre' },
  { label: 'Tecnologias', href: '#tecnologias', id: 'tecnologias' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    function closeOnOutsideClick(event) {
      if (menuOpen && !headerRef.current?.contains(event.target)) setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

      if (visibleSection) setActiveSection(visibleSection.target.id)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.15, 0.35, 0.6] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Matheus.dev — início">
          <span className="brand-mark" aria-hidden="true"><span>M</span><span>F</span></span>
          <span>Matheus<span className="brand-dot">.dev</span></span>
        </a>

        <div className="header-controls">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} onBeforeToggle={() => setMenuOpen(false)} />
          <button
            ref={menuButtonRef}
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>

        <nav
          className={`navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.id ? 'is-active' : undefined}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
