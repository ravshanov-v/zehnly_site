import { Component } from 'react'

const STORAGE_KEY = 'kredorium-language'
const SUPPORTED_LANGUAGES = ['uz', 'en', 'ru', 'de']

const TRANSLATIONS = {
  uz: {
    brand: 'Kredorium',
    eyebrow: 'Kutilmagan xatolik',
    title: 'Nimadir noto‘g‘ri ketdi.',
    description:
      'Sahifani qayta yuklab ko‘ring. Muammo davom etsa, birozdan so‘ng yana urinib ko‘ring.',
    reload: 'Sahifani yangilash',
    home: 'Bosh sahifa',
    details: 'Xatolik tafsilotlari',
    language: 'Til',
  },
  en: {
    brand: 'Kredorium',
    eyebrow: 'Unexpected error',
    title: 'Something went wrong.',
    description:
      'Try reloading the page. If the problem persists, please come back in a moment.',
    reload: 'Reload page',
    home: 'Back home',
    details: 'Error details',
    language: 'Language',
  },
  ru: {
    brand: 'Kredorium',
    eyebrow: 'Неожиданная ошибка',
    title: 'Что-то пошло не так.',
    description:
      'Попробуйте перезагрузить страницу. Если проблема повторится, вернитесь чуть позже.',
    reload: 'Перезагрузить',
    home: 'На главную',
    details: 'Детали ошибки',
    language: 'Язык',
  },
  de: {
    brand: 'Kredorium',
    eyebrow: 'Unerwarteter Fehler',
    title: 'Etwas ist schiefgelaufen.',
    description:
      'Bitte lade die Seite neu. Wenn das Problem weiterhin besteht, versuche es gleich noch einmal.',
    reload: 'Seite neu laden',
    home: 'Zur Startseite',
    details: 'Fehlerdetails',
    language: 'Sprache',
  },
}

const LANGUAGE_LABELS = {
  uz: 'UZ',
  en: 'EN',
  ru: 'RU',
  de: 'DE',
}

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved
  } catch {
    // localStorage mavjud bo'lmasa brauzer tilidan foydalanamiz
  }

  if (typeof navigator !== 'undefined') {
    const browserLanguage = String(navigator.language || '').slice(0, 2).toLowerCase()
    if (SUPPORTED_LANGUAGES.includes(browserLanguage)) return browserLanguage
  }

  return 'uz'
}

function persistLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // xususiy rejimda saqlash imkoni bo'lmasa ham davom etamiz
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = language
  }
}

function describeError(error) {
  if (!error) return ''
  if (typeof error === 'string') return error

  return error.stack || error.message || String(error)
}

const STYLES = `
  .kredorium-error-page {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    overflow: auto;
    background:
      radial-gradient(ellipse 70% 55% at 18% 0%, rgba(56, 189, 248, 0.16), transparent 62%),
      radial-gradient(ellipse 60% 50% at 92% 8%, rgba(99, 102, 241, 0.18), transparent 68%),
      #070D1A;
    color: #f8fafc;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }

  .kredorium-error-card {
    position: relative;
    width: 100%;
    max-width: 620px;
    padding: 40px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 24px;
    background: rgba(11, 19, 36, 0.82);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.04) inset,
      0 32px 90px -50px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(18px);
  }

  .kredorium-error-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #94a3b8;
  }

  .kredorium-error-brand-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.12);
  }

  .kredorium-error-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 30px;
    padding: 6px 12px;
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: 999px;
    background: rgba(248, 113, 113, 0.08);
    color: #fca5a5;
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .kredorium-error-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #f87171;
  }

  .kredorium-error-title {
    margin: 18px 0 0;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.045em;
    color: #f8fafc;
  }

  .kredorium-error-title span {
    color: #38bdf8;
  }

  .kredorium-error-description {
    max-width: 46ch;
    margin: 16px 0 0;
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.75;
  }

  .kredorium-error-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;
  }

  .kredorium-error-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 0 22px;
    border: 1px solid transparent;
    border-radius: 12px;
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease,
      color 160ms ease, filter 160ms ease;
  }

  .kredorium-error-button:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 3px;
  }

  .kredorium-error-button-primary {
    background: #38bdf8;
    color: #04121f;
  }

  .kredorium-error-button-primary:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .kredorium-error-button-secondary {
    border-color: rgba(148, 163, 184, 0.28);
    background: transparent;
    color: #cbd5e1;
  }

  .kredorium-error-button-secondary:hover {
    border-color: rgba(148, 163, 184, 0.5);
    background: rgba(148, 163, 184, 0.08);
    color: #f8fafc;
  }

  .kredorium-error-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(148, 163, 184, 0.14);
  }

  .kredorium-error-language-label {
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #64748b;
  }

  .kredorium-error-language-list {
    display: flex;
    gap: 6px;
  }

  .kredorium-error-language {
    min-width: 38px;
    height: 28px;
    padding: 0 8px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 7px;
    background: transparent;
    color: #94a3b8;
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
  }

  .kredorium-error-language:hover {
    border-color: rgba(56, 189, 248, 0.5);
    color: #e2e8f0;
  }

  .kredorium-error-language[data-active="true"] {
    border-color: rgba(56, 189, 248, 0.6);
    background: rgba(56, 189, 248, 0.12);
    color: #7dd3fc;
  }

  .kredorium-error-details {
    margin-top: 18px;
    color: #94a3b8;
    font-size: 11px;
  }

  .kredorium-error-details summary {
    cursor: pointer;
    user-select: none;
    color: #64748b;
    transition: color 160ms ease;
  }

  .kredorium-error-details summary:hover {
    color: #cbd5e1;
  }

  .kredorium-error-details pre {
    max-height: 180px;
    margin: 12px 0 0;
    padding: 14px;
    overflow: auto;
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 10px;
    background: rgba(2, 6, 16, 0.7);
    color: #fca5a5;
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 10px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  }

  @media (max-width: 520px) {
    .kredorium-error-card {
      padding: 28px 22px;
      border-radius: 20px;
    }
  }
`

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      error: null,
      language: detectLanguage(),
    }

    this.reloadButtonRef = null
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('Kredorium runtime error:', error, info?.componentStack || '')
  }

  componentDidUpdate(previousProps, previousState) {
    if (!previousState.hasError && this.state.hasError && this.reloadButtonRef) {
      this.reloadButtonRef.focus()
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  handleHome = () => {
    window.location.assign('/')
  }

  handleLanguageChange = (language) => {
    persistLanguage(language)
    this.setState({ language })
  }

  render() {
    if (!this.state.hasError) return this.props.children

    const language = this.state.language
    const copy = TRANSLATIONS[language] ?? TRANSLATIONS.uz
    const details = describeError(this.state.error)

    return (
      <div className="kredorium-error-page" role="alert">
        <style>{STYLES}</style>

        <main className="kredorium-error-card">
          <div className="kredorium-error-brand">
            <span className="kredorium-error-brand-dot" aria-hidden="true" />
            {copy.brand}
          </div>

          <span className="kredorium-error-badge">
            <span className="kredorium-error-badge-dot" aria-hidden="true" />
            {copy.eyebrow}
          </span>

          <h1 className="kredorium-error-title">
            {copy.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span>{copy.title.split(' ').slice(-1)}</span>
          </h1>

          <p className="kredorium-error-description">{copy.description}</p>

          <div className="kredorium-error-actions">
            <button
              ref={(node) => {
                this.reloadButtonRef = node
              }}
              type="button"
              onClick={this.handleReload}
              className="kredorium-error-button kredorium-error-button-primary"
            >
              {copy.reload}
            </button>
            <button
              type="button"
              onClick={this.handleHome}
              className="kredorium-error-button kredorium-error-button-secondary"
            >
              {copy.home}
            </button>
          </div>

          <div className="kredorium-error-footer">
            <span className="kredorium-error-language-label">{copy.language}</span>
            <div className="kredorium-error-language-list">
              {SUPPORTED_LANGUAGES.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => this.handleLanguageChange(code)}
                  data-active={language === code}
                  className="kredorium-error-language"
                  aria-pressed={language === code}
                >
                  {LANGUAGE_LABELS[code]}
                </button>
              ))}
            </div>
          </div>

          {details && (
            <details className="kredorium-error-details">
              <summary>{copy.details}</summary>
              <pre>{details}</pre>
            </details>
          )}
        </main>
      </div>
    )
  }
}
