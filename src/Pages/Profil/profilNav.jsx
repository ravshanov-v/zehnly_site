export default function ProfilNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'malumotlarim', label: "Ma'lumotlarim" },
    { id: 'statistika', label: 'Statistika' },
    { id: 'sevimlilar', label: 'Sevimlilarim' },
    { id: 'xatlar', label: 'Natijalar' },
    { id: 'tarix', label: 'Sessiyalar tarixi' },
    { id: 'sozlamalar', label: 'Sozlamalar' },
  ];

  return (
    <nav className="grid grid-cols-2 gap-1 md:flex md:flex-col md:gap-1">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={`group relative flex w-full items-center whitespace-nowrap rounded-lg px-3 py-2 text-left text-[12px] transition-colors duration-200 md:py-2.5 md:text-[13px] ${
              isActive
                ? 'bg-ink/[0.05] font-medium text-ink'
                : 'text-muted hover:bg-ink/[0.03] hover:text-ink'
            }`}
          >
            {isActive && (
              <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-ember md:inset-x-auto md:bottom-auto md:left-0 md:top-1/2 md:h-4 md:w-0.5 md:-translate-y-1/2" />
            )}
            <span className="flex-1">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
