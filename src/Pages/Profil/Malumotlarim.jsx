import { isRemoteAuth } from '../../utils/authStore.js'

export default function Malumotlarim({ user }) {
  const formatDate = (dateValue) => {
    if (!dateValue) return "Noma'lum";

    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return "Noma'lum";

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const displayName = user?.name || user?.email?.split('@')[0] || "Foydalanuvchi";
  const email = user?.email || "Ko'rsatilmagan";
  const userId = user?.id ? `#${user.id.slice(0, 8).toUpperCase()}` : '—';
  const createdAt = formatDate(user?.created_at ?? user?.createdAt);

  const cells = [
    { label: 'Elektron pochta', value: email, mono: false, accent: false },
    { label: "Ro'yxatdan o'tgan sana", value: createdAt, mono: false, accent: false },
    { label: 'Foydalanuvchi ID', value: userId, mono: true, accent: true },
    {
      label: 'Hisob turi',
      value: isRemoteAuth ? 'Supabase hisob · qurilmalararo sinxron' : 'Mahalliy hisob · shu brauzerda',
      mono: false,
      accent: false,
    },
  ];

  return (
    <div className="animate-fadeIn space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-hairline bg-paper p-5">
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand font-display text-xl font-semibold text-ember-ink">
              {displayName.charAt(0).toUpperCase()}
            </span>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ember">
                Mushohada a'zosi
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-ink">
                {displayName}
              </h3>
              <p className="mt-1.5 text-xs text-muted">{user?.role ? user.role : 'Foydalanuvchi'}</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-positive/25 bg-positive/[0.06] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-positive">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
            </span>
            Faol
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cells.map((cell) => (
          <div key={cell.label} className="rounded-xl border border-hairline bg-paper p-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {cell.label}
            </span>
            <p
              className={`mt-2 truncate text-sm font-medium ${
                cell.accent ? 'font-mono text-ember' : 'text-ink'
              } ${cell.mono ? 'font-mono' : ''} select-all`}
              title={cell.value}
            >
              {cell.value}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
