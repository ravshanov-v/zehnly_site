export default function Xatlar() {
  const notifications = [
    {
      id: 1,
      title: 'Yangi daraja ochildi!',
      desc: 'Siz "Izlanuvchi" bosqichiga muvaffaqiyatli o‘tdingiz.',
      time: '2 soat oldin',
      unread: true,
      color: 'bg-cyan-400',
    },
    {
      id: 2,
      title: 'Haftalik olimpiada boshlanmoqda',
      desc: 'Bugun soat 20:00 da Zakovat turniri start oladi.',
      time: 'Kecha',
      unread: false,
      color: 'bg-indigo-400',
    },
    {
      id: 3,
      title: 'Profil muvaffaqiyatli yangilandi',
      desc: 'Xavfsizlik parametrlari tasdiqlandi.',
      time: '3 kun oldin',
      unread: false,
      color: 'bg-slate-500',
    },
  ];

  return (
    <div className="space-y-3 animate-fadeIn">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`p-3.5 rounded-xl border transition-all flex items-start justify-between ${
            n.unread
              ? 'border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/15'
              : 'border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.color}`} />
            <div>
              <h4 className={`text-sm font-medium ${n.unread ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                {n.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{n.desc}</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">{n.time}</span>
        </div>
      ))}
    </div>
  );
}
