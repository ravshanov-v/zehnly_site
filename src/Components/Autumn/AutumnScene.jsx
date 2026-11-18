import AutumnLeafCanvas from './AutumnLeafCanvas.jsx'

export default function AutumnScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <div className="autumn-sun-glow pointer-events-none absolute -right-24 -top-32 h-[38rem] w-[38rem] rounded-full" />
      <div className="autumn-rays pointer-events-none absolute inset-0" />
      <div className="autumn-rays autumn-rays-soft pointer-events-none absolute inset-0" />
      <AutumnLeafCanvas />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-700/10 to-transparent dark:from-amber-500/[0.06]" />
    </div>
  )
}
