import { useEffect, useRef } from 'react';
import ProfilNav from './profilNav';

const TAB_TITLES = {
  malumotlarim: "Mening ma'lumotlarim",
  statistika: 'Faollik va statistika',
  sevimlilar: "Sevimlilar ro'yxati",
  xatlar: 'Test natijalari',
  tarix: 'Sessiyalar tarixi',
  sozlamalar: 'Tizim sozlamalari',
};

export default function ProfilLayout({ isOpen, onClose, activeTab, setActiveTab, user, onLogout, children }) {
  const dialogRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    contentRef.current?.scrollTo({ top: 0 });
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const displayName = user?.name || user?.email?.split('@')[0] || "Foydalanuvchi";
  const email = user?.email || "";
  const firstLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 select-none sm:p-6">
      <div
        onClick={onClose}
        className="scrim absolute inset-0 backdrop-blur-md transition-all duration-300"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-dialog-title"
        tabIndex={-1}
        className="relative flex h-[92vh] max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-hairline bg-raised text-ink shadow-[var(--shadow-lift)] outline-none focus:outline-none md:h-[620px] md:flex-row"
      >
        <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_70%)] blur-2xl" />

        <aside className="relative z-10 flex w-full shrink-0 flex-col justify-between border-b border-hairline bg-paper p-4 md:w-72 md:border-b-0 md:border-r md:p-5">
          <div>
            <div className="flex items-center gap-3.5 md:border-b md:border-hairline md:pb-5">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand font-display text-xl font-semibold text-white">
                  {firstLetter}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-paper bg-positive" />
              </div>

              <div className="min-w-0 overflow-hidden">
                <h3 className="truncate text-base font-semibold text-ink">
                  {displayName}
                </h3>
                <p className="truncate text-xs text-muted" title={email}>
                  {email}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Profilni yopish"
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline text-muted transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] hover:text-ink md:hidden"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 md:mt-5">
              <span className="kicker hidden md:block">Navigatsiya</span>
              <div className="mt-0 md:mt-3">
                <ProfilNav activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-negative/25 bg-negative/[0.05] px-4 py-2 text-xs font-medium text-negative transition-colors hover:bg-negative/10 md:mt-4 md:py-2.5"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Tizimdan chiqish</span>
          </button>
        </aside>

        <div
          ref={contentRef}
          className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto p-5 md:p-6"
        >
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-hairline pb-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Profil bo‘limi
              </span>
              <h2 id="profile-dialog-title" className="mt-2 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-ink">
                {TAB_TITLES[activeTab] || 'Profil'}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Profilni yopish"
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline text-muted transition-colors hover:border-hairline-strong hover:bg-ink/[0.04] hover:text-ink md:flex"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
