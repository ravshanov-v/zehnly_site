export default function AuroraField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 select-none overflow-hidden bg-paper transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[radial-gradient(115%_75%_at_50%_-18%,var(--halo),transparent_62%)]" />

      <div className="dot-grid absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_78%_62%_at_50%_0%,black,transparent_82%)]" />

      <div className="animate-drift-a absolute -top-56 left-1/2 h-[42rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(53,86,245,0.2),transparent_66%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(125,149,255,0.18),transparent_66%)]" />

      <div className="animate-drift-b absolute -right-56 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.16),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(180,156,255,0.12),transparent_68%)]" />

      <div className="absolute -bottom-72 -left-56 h-[38rem] w-[38rem] rounded-full border border-hairline opacity-60">
        <div className="absolute inset-20 rounded-full border border-dashed border-hairline" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-paper to-transparent" />

      <div className="noise noise-grain absolute inset-0 mix-blend-soft-light" />
    </div>
  )
}
