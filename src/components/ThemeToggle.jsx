export default function ThemeToggle({ theme, onToggle, onBeforeToggle }) {
  const nextAction = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'

  function handleClick() {
    onBeforeToggle?.()
    onToggle()
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={handleClick}
      aria-label={nextAction}
      aria-pressed={theme === 'light'}
      title={nextAction}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
        </svg>
      )}
    </button>
  )
}
