import { useCallback, useEffect, useId, useRef, useState } from 'react';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AUTO_ENTER_MS = 3600;
const REDUCED_AUTO_ENTER_MS = 900;

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState(prefersReducedMotion ? 'ready' : 'drawing');
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const startYRef = useRef(0);
  const finishedRef = useRef(false);

  const uid = useId().replace(/:/g, '');
  const zId = `zehnly-real-z-${uid}`;
  const ringId = `zehnly-real-ring-${uid}`;
  const coreId = `zehnly-real-core-${uid}`;

  const triggerUnlock = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsUnlocked(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, prefersReducedMotion ? 150 : 650);
  }, [onFinish]);

  useEffect(() => {
    // Foydalanuvchi hech narsa qilmasa ham avtomatik ochiladi
    const autoTimer = setTimeout(
      triggerUnlock,
      prefersReducedMotion ? REDUCED_AUTO_ENTER_MS : AUTO_ENTER_MS
    );

    const drawTimer = prefersReducedMotion
      ? null
      : setTimeout(() => {
          setPhase('ready');
        }, 1100);

    // Klaviatura orqali ochish (Enter, Space yoki Yuqoriga o'q)
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowUp') {
        triggerUnlock();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(autoTimer);
      if (drawTimer) clearTimeout(drawTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerUnlock]);

  const handleStart = (clientY) => {
    if (phase !== 'ready' || isUnlocked) return;
    setIsDragging(true);
    startYRef.current = clientY;
  };

  const handleMove = (clientY) => {
    if (!isDragging || isUnlocked) return;
    const delta = clientY - startYRef.current;
    if (delta < 0) {
      const bounded = Math.max(delta, -180);
      setDragY(bounded);

      if (bounded <= -110) {
        setIsDragging(false);
        triggerUnlock();
      }
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!isUnlocked) {
      setDragY(0);
    }
  };

  const dragProgress = Math.min(Math.abs(dragY) / 110, 1);

  return (
    <div
      onMouseMove={(e) => handleMove(e.clientY)}
      onMouseUp={handleEnd}
      onTouchMove={(e) => handleMove(e.touches[0].clientY)}
      onTouchEnd={handleEnd}
      // touch-none va overscroll-none mobil brauzerning sahifani yangilashini (refresh) bloklaydi
      className={`fixed inset-0 z-[100] h-[100dvh] w-full flex flex-col justify-between items-center select-none overflow-hidden touch-none transition-all ease-out ${
        prefersReducedMotion ? 'duration-100' : 'duration-700'
      } ${isUnlocked ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}
      style={{
        background: 'linear-gradient(180deg, #024dbd 0%, #1765dd 38%, #5b95f2 70%, #dbeafe 92%, #ffffff 100%)',
      }}
    >
      <div className="w-full h-8 pointer-events-none" />

      {/* MARKAZ: ZEHNLY LOGOSI */}
      <div className="relative flex items-center justify-center pointer-events-none transition-transform duration-300">
        <div className="inline-flex items-center gap-0 scale-[2.2] md:scale-[2.5]">
          <svg
            viewBox="0 0 26 26"
            aria-hidden="true"
            className="w-9 h-9 shrink-0 overflow-visible"
          >
            <defs>
              <linearGradient id={zId} gradientUnits="userSpaceOnUse" x1="4" y1="13" x2="22" y2="13">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>

              <linearGradient id={ringId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.9" />
              </linearGradient>

              <radialGradient id={coreId}>
                <stop offset="0%" stopColor="#f0fdff" />
                <stop offset="45%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* "Z" Shakli */}
            <path
              d="M4.5 5.5 H21.5 L4.5 20.5 H21.5"
              fill="none"
              stroke={`url(#${zId})`}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="65"
              strokeDashoffset={phase === 'drawing' ? '65' : '0'}
              style={{
                transition: prefersReducedMotion
                  ? 'none'
                  : 'stroke-dashoffset 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
                filter: 'drop-shadow(0 4px 12px rgba(15, 23, 42, 0.25)) drop-shadow(0 0 10px rgba(34, 211, 238, 0.4))',
              }}
            />

            {/* Orbital halqa */}
            <g
              className="origin-center"
              style={{
                opacity: phase === 'drawing' ? 0.2 : 1,
                transition: prefersReducedMotion ? 'none' : 'opacity 0.8s ease-out',
                animation: prefersReducedMotion ? 'none' : 'spin 18s linear infinite',
              }}
            >
              <g transform="rotate(55 13 13)">
                <ellipse
                  cx="13"
                  cy="13"
                  rx="11"
                  ry="4.2"
                  fill="none"
                  stroke={`url(#${ringId})`}
                  strokeWidth="0.95"
                  strokeDasharray="50"
                  strokeDashoffset={phase === 'drawing' ? '50' : '0'}
                  style={{
                    transition: prefersReducedMotion
                      ? 'none'
                      : 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                  }}
                />
                <circle cx="24" cy="13" r="1.1" fill="#67e8f9" />
              </g>
            </g>

            {/* Yadro nuri */}
            <g
              style={{
                opacity: phase === 'ready' ? 1 : 0,
                transform: phase === 'ready' ? 'scale(1)' : 'scale(0)',
                transformOrigin: '21.5px 5.5px',
                transition: prefersReducedMotion ? 'none' : 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <circle cx="21.5" cy="5.5" r="3.4" fill={`url(#${coreId})`} />
              <circle cx="21.5" cy="5.5" r="1.2" fill="#ffffff" className="opacity-95" />
            </g>
          </svg>

          {/* "ehnly" matni */}
          <span
            className="font-bold tracking-tight text-white text-3xl transition-all ease-out -ml-[1px]"
            style={{
              opacity: phase === 'ready' ? 1 : 0,
              transform: phase === 'ready' ? 'translateX(0)' : 'translateX(-6px)',
              transition: prefersReducedMotion ? 'none' : 'all 1s ease-out',
              filter: phase === 'ready' 
                ? 'drop-shadow(0 3px 12px rgba(15, 23, 42, 0.25))' 
                : 'blur(4px)',
            }}
          >
            ehnly
          </span>
        </div>
      </div>

      {/* PASTDAGI SURISH VA TO'R QATLAMI */}
      <div className="relative w-full pb-10 flex flex-col items-center select-none">
        <div
          className="absolute bottom-0 w-80 pointer-events-none transition-all duration-150 ease-out overflow-hidden"
          style={{
            height: `${Math.abs(dragY) * 1.5}px`,
            opacity: dragProgress * 0.95,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(34, 211, 238, 0.45) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.45) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              transform: 'perspective(300px) rotateX(60deg)',
              transformOrigin: 'bottom center',
              maskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
            }}
          />
        </div>

        <div
          onMouseDown={(e) => handleStart(e.clientY)}
          onTouchStart={(e) => handleStart(e.touches[0].clientY)}
          className="relative flex flex-col items-center cursor-grab active:cursor-grabbing touch-none select-none z-10"
          style={{
            transform: `translateY(${dragY}px)`,
            transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)',
          }}
        >
          <div
            className="flex flex-col items-center mb-3 transition-opacity duration-300"
            style={{ opacity: 1 - dragProgress * 0.8 }}
          >
            <svg
              className={`w-5 h-5 text-blue-600/70 ${prefersReducedMotion ? '' : 'animate-bounce'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </div>

          <div className="relative px-7 py-3 rounded-full border border-white/80 bg-white/45 backdrop-blur-xl shadow-[0_8px_25px_rgba(37,99,235,0.22)] flex items-center gap-2">
            <div
              className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-cyan-400 to-indigo-500 pointer-events-none transition-opacity duration-300"
              style={{ opacity: 0.3 + dragProgress * 0.6 }}
            />
            <div
              className="relative w-14 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-transform duration-200"
              style={{ transform: `scaleX(${1 + dragProgress * 0.3})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
