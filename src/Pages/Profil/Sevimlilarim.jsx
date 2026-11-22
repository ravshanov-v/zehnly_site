export default function Sevimlilarim({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div className="flex h-64 animate-fadeIn flex-col items-center justify-center rounded-xl border border-dashed border-hairline-strong p-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-hairline text-ember">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h4 className="text-sm font-semibold text-ink">Sevimlilar ro&apos;yxati bo&apos;sh</h4>
        <p className="mt-1 max-w-xs text-xs leading-5 text-muted">
          O&apos;zingizga ma&apos;qul kelgan o&apos;quv maskanlarini saqlab qo&apos;ying.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn space-y-2.5">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl border border-hairline bg-paper p-3.5 transition-colors hover:border-ember/40"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-brand text-ember-ink">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-ink">{item.name}</h4>
              <p className="text-xs text-muted">
                {item.category}
                {item.district ? ` · ${item.district}` : ''}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
