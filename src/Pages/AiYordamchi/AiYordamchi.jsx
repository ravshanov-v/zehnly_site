import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spark } from '../../Components/Marks.jsx'
import { useTheme } from '../../context/useTheme.js'
import { generateGeminiReply } from '../../utils/geminiClient.js'

const starterPrompts = [
  {
    label: 'Matematikadan misol yechishga yordam ber',
    description: 'Qadam-baqadam yechim va tushuntirish',
    prompt:
      'Matematikadan misol yechishga yordam ber. Menga bitta misol ber va uni qadam-baqadam yechib tushuntir.',
    icon: <MathIcon />,
  },
  {
    label: 'Ingliz tili grammatikasini tushuntir',
    description: 'Qoidalar va misollar bilan',
    prompt:
      'Ingliz tili grammatikasini tushuntir. Present Perfect mavzusini misollar bilan sodda tilda tushuntir.',
    icon: <LanguageIcon />,
  },
  {
    label: 'Mantiqiy savol ber',
    description: 'Fikrlashni sinab ko‘ramiz',
    prompt: 'Menga bitta qiziqarli mantiqiy savol ber va javobni darhol aytma.',
    icon: <LogicIcon />,
  },
  {
    label: 'Fotosintezni sodda tushuntir',
    description: 'Biologiya mavzusini oson izohla',
    prompt: 'Fotosintez jarayonini sodda tilda va qisqa qadamlar bilan tushuntir.',
    icon: <ScienceIcon />,
  },
]

function MathIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="2.5" width="16" height="19" rx="3" />
      <path d="M8 7h8M8 12h2M14 12h2M8 16.5h2M14 16.5h2" />
    </svg>
  )
}

function LanguageIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  )
}

function LogicIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18h6M10 21h4" />
      <path d="M8.4 14.5a6 6 0 1 1 7.2 0c-.9.7-1.4 1.4-1.4 2.5h-4.4c0-1.1-.5-1.8-1.4-2.5Z" />
    </svg>
  )
}

function ScienceIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3h6M10 3v5.5L4.8 18a2.4 2.4 0 0 0 2.1 3.5h10.2a2.4 2.4 0 0 0 2.1-3.5L14 8.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
  )
}

function createId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text)

  return new Promise((resolve, reject) => {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()

    try {
      if (!document.execCommand('copy')) throw new Error('Nusxalash amalga oshmadi.')
      resolve()
    } catch (error) {
      reject(error)
    } finally {
      textarea.remove()
    }
  })
}

function renderInline(text) {
  const parts = String(text).split(/(\*\*[^*\n]+\*\*|`[^`\n]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }

    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={index}
          className="rounded-md border border-hairline bg-sunken px-1.5 py-0.5 font-mono text-[0.82em] text-ember"
        >
          {part.slice(1, -1)}
        </code>
      )
    }

    return <span key={index}>{part}</span>
  })
}

function TextLines({ text }) {
  return (
    <div className="space-y-1.5">
      {String(text)
        .split('\n')
        .map((line, index) => {
          const trimmed = line.trim()

          if (!trimmed) return <div key={index} className="h-1.5" aria-hidden="true" />

          const bullet = trimmed.match(/^[-*•]\s+(.*)$/)
          if (bullet) {
            return (
              <div key={index} className="flex gap-2.5">
                <span
                  className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-ember"
                  aria-hidden="true"
                />
                <p>{renderInline(bullet[1])}</p>
              </div>
            )
          }

          const numbered = trimmed.match(/^(\d+)[.)]\s+(.*)$/)
          if (numbered) {
            return (
              <div key={index} className="flex gap-2.5">
                <span className="shrink-0 font-mono text-[11px] text-ember">
                  {numbered[1]}.
                </span>
                <p>{renderInline(numbered[2])}</p>
              </div>
            )
          }

          if (/^-{3,}$/.test(trimmed)) {
            return <hr key={index} className="my-2 border-hairline" />
          }

          const heading = trimmed.match(/^#{1,3}\s+(.*)$/)
          if (heading) {
            return (
              <p key={index} className="font-semibold text-ink">
                {renderInline(heading[1])}
              </p>
            )
          }

          return <p key={index}>{renderInline(line)}</p>
        })}
    </div>
  )
}

function MessageBody({ text }) {
  const segments = String(text).split(/(```[\s\S]*?```)/g)

  return (
    <div className="space-y-2">
      {segments.map((segment, index) => {
        if (!segment.startsWith('```')) return <TextLines key={index} text={segment} />

        const languageMatch = segment.match(/^```([a-zA-Z0-9_-]*)/)
        const language = languageMatch?.[1] || ''
        const code = segment
          .replace(/^```[a-zA-Z0-9_-]*\n?/, '')
          .replace(/```$/, '')
          .trim()

        return (
          <div
            key={index}
            className="my-2 overflow-hidden rounded-xl border border-hairline bg-sunken"
          >
            {language && (
              <div className="border-b border-hairline px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                {language}
              </div>
            )}
            <pre className="overflow-x-auto p-3 font-mono text-[12px] leading-6 text-ink-soft">
              <code>{code}</code>
            </pre>
          </div>
        )
      })}
    </div>
  )
}

function AiAvatar() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-ember/25 gradient-brand text-ember-ink">
      <Spark className="h-4 w-4" />
    </span>
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current)
  }, [])

  const handleCopy = async () => {
    try {
      await copyToClipboard(text)
      setCopied(true)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-7 items-center gap-1.5 rounded-lg px-1.5 text-[10px] font-medium text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
      aria-label={copied ? 'Javob nusxalandi' : 'Javobni nusxalash'}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? 'Nusxalandi' : 'Nusxalash'}
    </button>
  )
}

function ChatMessage({ message }) {
  if (message.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-3xl rounded-br-lg gradient-brand px-4 py-3 text-sm leading-6 text-ember-ink sm:max-w-[75%]">
          <p className="whitespace-pre-wrap">{message.text}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3">
      <AiAvatar />
      <div className="min-w-0 flex-1">
        <div className="rounded-2xl rounded-tl-md border border-hairline bg-raised px-4 py-3 text-sm leading-7 text-ink-soft">
          <MessageBody text={message.text} />
        </div>
        <CopyButton text={message.text} />
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3" role="status" aria-live="polite">
      <AiAvatar />
      <div className="flex items-center gap-3 rounded-2xl rounded-tl-md border border-hairline bg-raised px-4 py-3.5">
        <span className="flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ember [animation-delay:-0.25s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ember [animation-delay:-0.12s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ember" />
        </span>
        <span className="text-xs text-muted">Kredorium AI o‘ylamoqda...</span>
      </div>
    </div>
  )
}

function ErrorMessage({ text }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-2.5 rounded-2xl border border-negative/25 bg-negative/[0.07] px-4 py-3 text-sm text-negative"
    >
      <ErrorIcon />
      <div>
        <p className="font-semibold text-negative">Javob olinmadi</p>
        <p className="mt-0.5 text-xs leading-6 text-negative/80">{text}</p>
      </div>
    </div>
  )
}

function EmptyState({ onPrompt }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-6 text-center animate-fadeIn sm:py-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/25 gradient-brand text-ember-ink sm:h-14 sm:w-14">
        <Spark className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
      <h1 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.65rem)] font-semibold tracking-[-0.04em] text-ink sm:mt-5">
        Qanday yordam bera olaman?
      </h1>
      <p className="mt-2 max-w-md text-[13px] leading-6 text-muted sm:text-sm">
        Savol yozing yoki tayyor mavzulardan birini tanlang. Kredorium AI tushuntiradi,
        mashq qilishga va reja tuzishga yordam beradi.
      </p>

      <div className="mt-6 grid w-full max-w-2xl gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
        {starterPrompts.map((starter) => (
          <button
            key={starter.label}
            type="button"
            onClick={() => onPrompt(starter.prompt)}
            className="group flex items-start gap-3 rounded-2xl border border-hairline bg-raised p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ember/40 hover:bg-raised sm:p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-ink/[0.04] text-ember transition-colors group-hover:border-ember/30 group-hover:text-ink">
              {starter.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-medium leading-5 text-ink">
                {starter.label}
              </span>
              <span className="mt-1 block text-[11px] leading-5 text-muted">
                {starter.description}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function AiYordamchi() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const messagesRef = useRef(null)
  const inputRef = useRef(null)
  const requestRef = useRef(null)
  const isLoading = status === 'loading'

  useEffect(() => {
    const node = messagesRef.current
    if (!node) return

    if (!messages.length && !isLoading && !error) {
      node.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const behavior =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth'

    node.scrollTo({ top: node.scrollHeight, behavior })
  }, [messages, isLoading, error])

  useEffect(() => {
    const node = inputRef.current
    if (!node) return

    node.style.height = 'auto'
    node.style.height = `${Math.min(node.scrollHeight, 160)}px`
  }, [input])

  useEffect(() => {
    return () => {
      requestRef.current?.abort()
      requestRef.current = null
    }
  }, [])

  const resetChat = () => {
    requestRef.current?.abort()
    requestRef.current = null
    setMessages([])
    setInput('')
    setError('')
    setStatus('idle')
    window.requestAnimationFrame(() => inputRef.current?.focus())
  }

  const sendMessage = async (rawMessage) => {
    const text = String(rawMessage ?? input).trim()
    if (!text || isLoading) return

    const userMessage = { id: createId(), role: 'user', text }
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setInput('')
    setError('')
    setStatus('loading')
    inputRef.current?.focus()

    const controller = new AbortController()
    requestRef.current = controller

    try {
      const answer = await generateGeminiReply(nextMessages, controller.signal)

      if (requestRef.current !== controller) return

      setMessages((previous) => [
        ...previous,
        { id: createId(), role: 'assistant', text: answer },
      ])
    } catch (requestError) {
      if (requestError?.name === 'AbortError' || requestRef.current !== controller) return
      setError(requestError?.message || 'Noma’lum xatolik yuz berdi. Qayta urinib ko‘ring.')
    } finally {
      if (requestRef.current === controller) {
        requestRef.current = null
        setStatus('idle')
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden overscroll-none bg-paper text-ink transition-colors duration-300">
      <header className="relative z-20 shrink-0 border-b border-hairline bg-paper">
        <div className="mx-auto flex h-16 w-full max-w-[1040px] items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-hairline bg-ink/[0.03] px-3 text-[12px] font-medium text-muted transition-colors hover:border-hairline-strong hover:bg-ink/[0.06] hover:text-ink"
          >
            <span className="text-base leading-none" aria-hidden="true">
              ←
            </span>
            <span className="hidden sm:inline">Bosh sahifaga qaytish</span>
            <span className="sm:hidden">Bosh sahifa</span>
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ember/25 gradient-brand text-ember-ink">
                <Spark className="h-4 w-4" />
              </span>
              <span className="hidden font-display text-[13px] font-semibold tracking-tight text-ink sm:inline sm:text-sm">
                Kredorium <span className="text-ember">AI</span>
              </span>
            </div>

            <span className="h-5 w-px bg-hairline" aria-hidden="true" />

            <button
              type="button"
              onClick={resetChat}
              aria-label="Yangi suhbat boshlash"
              title="Yangi suhbat"
              className="inline-flex h-9 items-center gap-2 rounded-xl border border-hairline bg-ink/[0.03] px-2.5 text-[12px] font-medium text-muted transition-colors hover:border-hairline-strong hover:bg-ink/[0.06] hover:text-ink sm:px-3"
            >
              <PlusIcon />
              <span className="hidden sm:inline">Yangi suhbat</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              role="switch"
              aria-checked={isDark}
              aria-label={isDark ? 'Yorugʻ rejimga oʻtish' : 'Tun rejimiga oʻtish'}
              title={isDark ? 'Yorugʻ rejim' : 'Tun rejimi'}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-transparent text-ink transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] active:scale-95"
            >
              {isDark ? (
                <svg
                  className="h-4 w-4 text-ember"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 text-ember"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div ref={messagesRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="mx-auto flex min-h-full w-full max-w-[800px] flex-col px-4 py-6 sm:px-6 sm:py-8">
            {messages.length === 0 ? (
              <EmptyState onPrompt={sendMessage} />
            ) : (
              <div
                className="space-y-6"
                aria-live="polite"
                aria-label="Suhbat xabarlari"
              >
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}

                {isLoading && <TypingIndicator />}

                {error && <ErrorMessage text={error} />}
              </div>
            )}
          </div>
        </div>

        <div className="relative shrink-0 border-t border-hairline bg-paper px-4 pb-[max(0.875rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
          <div className="mx-auto w-full max-w-[800px]">
            <form onSubmit={handleSubmit}>
              <div className="rounded-2xl border border-hairline-strong bg-raised p-2 transition-all focus-within:border-ember/50 focus-within:ring-4 focus-within:ring-ember/10">
                <label htmlFor="ai-chat-input" className="sr-only">
                  Savolingiz
                </label>
                <textarea
                  id="ai-chat-input"
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Kredorium AI orqali savol bering..."
                  className="min-h-12 max-h-40 w-full resize-none bg-transparent px-2.5 py-2 text-sm leading-6 text-ink outline-none placeholder:text-muted"
                />

                <div className="flex items-center justify-end gap-3 px-1 pb-0.5">
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    aria-label="Xabar yuborish"
                    title="Yuborish"
                    className="ml-auto flex h-9 w-9 items-center justify-center rounded-xl gradient-brand text-ember-ink transition-all hover:brightness-110 disabled:pointer-events-none disabled:opacity-40"
                  >
                    {isLoading ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ember-ink/80 border-t-transparent" />
                    ) : (
                      <SendIcon />
                    )}
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-2 text-center text-[10px] leading-4 text-muted">
              Enter — yuborish · Shift + Enter — yangi qator · AI xato qilishi mumkin
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
