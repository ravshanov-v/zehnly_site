import { useEffect, useRef, useState } from 'react';
import { allCategories, categoryGroups } from './Categories/index.js';

const ARENA_SECONDS = 30;

const EMPTY_STATS = {
  totalAnswered: 0,
  correctCount: 0,
  wrongCount: 0,
  totalEarnedXP: 0,
};

const TOTAL_QUESTIONS = allCategories.reduce(
  (total, category) => total + category.questions.length,
  0
);

// Nomi bilan berilgan ikonkalar uchun vizual moslik
const ICON_MAP = {
  BookOpen: '📚',
  Calculator: '📐',
  Landmark: '🏛️',
  Atom: '⚛️',
  FlaskConical: '🧪',
  Dna: '🧬',
  PenLine: '📝',
  Globe: '🌍',
  Monitor: '💻',
  Scale: '⚖️',
  Code: '🖥️',
  Server: '⚙️',
  Smartphone: '📱',
  Shield: '🛡️',
  Bot: '🤖',
  Palette: '🎨',
  Languages: '🌐',
};

function getSubjectIcon(icon) {
  return ICON_MAP[icon] || icon;
}

function buildSessionQueue(categoryId = null) {
  const category = categoryId
    ? allCategories.find((item) => item.id === categoryId)
    : null;
  const source = category ? [category] : allCategories;
  const queue = source.flatMap((item) =>
    item.questions.map((question) => ({
      ...question,
      categoryId: item.id,
      categoryTitle: item.title,
      categoryGroup: item.category,
      icon: item.icon,
    }))
  );

  for (let i = queue.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }

  return queue;
}

export default function Zakovat() {
  const [gameState, setGameState] = useState('lobby'); // 'lobby' | 'arena' | 'summary'
  const [timeLeft, setTimeLeft] = useState(ARENA_SECONDS);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [stats, setStats] = useState(EMPTY_STATS);
  const resolvedQuestionRef = useRef(false);

  const currentQuestion = sessionQuestions[questionIndex] || null;

  const isTimerRunning =
    gameState === 'arena' && !isAnswered && timeLeft > 0 && currentQuestion !== null;

  // Savol almashganda yoki komponent unmount bo'lganda interval tozalanadi
  useEffect(() => {
    if (!isTimerRunning) return undefined;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, questionIndex, sessionQuestions]);

  // Vaqt tugaganda savol yakunlangan deb hisoblanadi
  const isDone = isAnswered || (gameState === 'arena' && timeLeft <= 0);

  // Vaqt tugashi natijasini sessiya statistikasiga faqat bir marta qo'shamiz
  useEffect(() => {
    if (gameState !== 'arena' || isAnswered || timeLeft > 0 || !currentQuestion) return;
    if (resolvedQuestionRef.current) return;

    resolvedQuestionRef.current = true;
    setStats((prev) => ({
      ...prev,
      totalAnswered: prev.totalAnswered + 1,
      wrongCount: prev.wrongCount + 1,
    }));
  }, [gameState, isAnswered, timeLeft, currentQuestion]);

  const startArena = (categoryId = null) => {
    const queue = buildSessionQueue(categoryId);
    setActiveCategoryId(categoryId);
    setSessionQuestions(queue);
    setQuestionIndex(0);
    setTimeLeft(ARENA_SECONDS);
    setSelectedOption(null);
    setIsAnswered(false);
    setStats(EMPTY_STATS);
    resolvedQuestionRef.current = false;
    setGameState('arena');
  };

  const startNextQuestion = () => {
    const nextIndex = questionIndex + 1;

    if (nextIndex >= sessionQuestions.length) {
      setSessionQuestions(buildSessionQueue(activeCategoryId));
      setQuestionIndex(0);
    } else {
      setQuestionIndex(nextIndex);
    }

    setTimeLeft(ARENA_SECONDS);
    setSelectedOption(null);
    setIsAnswered(false);
    resolvedQuestionRef.current = false;
  };

  const finishSession = () => {
    setGameState('summary');
  };

  const resumeSession = () => {
    setGameState('arena');
  };

  const handleSelectOption = (id) => {
    if (isDone || resolvedQuestionRef.current) return;

    const isAnswerCorrect = id === currentQuestion?.correct;
    resolvedQuestionRef.current = true;

    setSelectedOption(id);
    setIsAnswered(true);
    setStats((prev) => ({
      totalAnswered: prev.totalAnswered + 1,
      correctCount: prev.correctCount + (isAnswerCorrect ? 1 : 0),
      wrongCount: prev.wrongCount + (isAnswerCorrect ? 0 : 1),
      totalEarnedXP: prev.totalEarnedXP + (isAnswerCorrect ? currentQuestion?.xp || 0 : 0),
    }));
  };

  const handleBackToLobby = () => {
    setGameState('lobby');
    setSessionQuestions([]);
    setQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(ARENA_SECONDS);
    setStats(EMPTY_STATS);
    resolvedQuestionRef.current = false;
  };

  const isCorrect = isDone && selectedOption === currentQuestion?.correct;
  const isTimeout = isDone && selectedOption === null;
  const correctOption = currentQuestion?.options.find(
    (option) => option.id === currentQuestion.correct
  );
  const accuracyPercentage = stats.totalAnswered > 0
    ? Math.round((stats.correctCount / stats.totalAnswered) * 100)
    : 0;

  return (
    <div className="relative z-10 isolate w-full max-w-5xl mx-auto flex flex-col gap-6 select-none animate-fadeIn">
      {/* 1. LOBBY (SHOUGA KIRISH ARENASI) */}
      {gameState === 'lobby' && (
        <div className="relative z-10 flex flex-col gap-6">
          {/* Shou Bosh maydoni — Shaffof emas, aniq qattiq qora-kobalt fon */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#090d16] dark:bg-[#070a12] border border-slate-800 shadow-2xl overflow-hidden text-center flex flex-col items-center justify-center">
            {/* Markaziy intellektual nur konusi */}
            <div className="absolute top-0 w-96 h-96 bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* Shou statusi */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Zehnly Jonli Arena • 1-Mavsum</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl leading-tight">
              Aql va Tafakkur <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Katta Maydoni
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Har bir savol uchun 30 soniya. O‘z bilimlaringiz bilan intellektual
              rezidentlar o‘rtasida mutlaq chempionlikni qo‘lga kiriting.
            </p>

            {/* Shouga kirish tugmasi */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => startArena()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Arenaga kirish (30 soniya)</span>
              </button>

              <div className="px-5 py-3.5 rounded-2xl bg-[#0b1120] border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2">
                <span className="text-amber-400">★ Savollar bazasi:</span>
                <span className="font-bold text-white">{TOTAL_QUESTIONS} ta savol</span>
              </div>
            </div>
          </div>

          {/* Yo'nalish va fanlar tanlovi */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-white">Yo‘nalish va fanni tanlang</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fan ustiga bosib, o‘sha yo‘nalishdan tasodifiy savol bilan arenaga kiring.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {allCategories.length} ta fan • {TOTAL_QUESTIONS} ta savol
              </span>
            </div>

            {categoryGroups.map((group) => (
              <div key={group.id} className="p-5 rounded-2xl bg-[#0d121f] border border-slate-800">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" />
                  <h3 className="text-sm font-bold text-white">{group.title}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {group.items.length} ta fan
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {group.items.map((subject) => (
                    <button
                      key={subject.id}
                      type="button"
                      onClick={() => startArena(subject.id)}
                      className="group flex flex-col items-start gap-1.5 p-3.5 rounded-xl bg-[#0b1120] border border-slate-800 hover:border-cyan-500 hover:bg-[#11192e] active:scale-[0.98] text-left transition-all"
                    >
                      <span className="text-xl leading-none">{getSubjectIcon(subject.icon)}</span>
                      <span className="text-xs font-medium text-slate-300 group-hover:text-white truncate w-full">
                        {subject.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {subject.questions.length} savol
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Jonli statistik peshqadamlar — Haqiqiy qora qattiq kartochkalar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0d121f] border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Haftalik Peshqadam</span>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-bold text-slate-950 text-sm">
                  #1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Alisher M.</h4>
                  <p className="text-xs text-slate-400 font-mono">14 g‘alaba • 96% aniqlik</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d121f] border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Arenadagi Faollik</span>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-bold font-mono text-cyan-400">128</span>
                <span className="text-xs text-emerald-400 font-mono">Rezident hozir onlayn</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Har 5 daqiqada yangi bellashuv</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d121f] border border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Sizning holatingiz</span>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-bold font-mono text-indigo-400">0 Bellashuv</span>
                <span className="text-xs text-slate-500 font-mono">Reytingsiz</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Birinchi savolga javob berib oching</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. ARENA (JONLI SHOU VA SAVOL BOSHQARUVI) */}
      {gameState === 'arena' && currentQuestion && (
        <div className="relative z-10 flex flex-col gap-6">
          {/* Ustki shou paneli: Taymer va Gong */}
          <div className="p-4 px-6 rounded-2xl bg-[#0d121f] border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-[#0b1a33] border border-blue-500 text-blue-300 font-mono text-xs font-semibold">
                {currentQuestion.categoryGroup} • {currentQuestion.categoryTitle}
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#0b1120] border border-slate-700 text-slate-300 font-mono text-xs font-semibold">
                Savol: <strong className="text-cyan-300">{questionIndex + 1}</strong>
                <span className="text-slate-500"> / {sessionQuestions.length}</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                Mukofot: <strong className="text-amber-400">+{currentQuestion.xp} XP</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* 30 soniyalik Taymer (Qizil chaqnash) */}
              <div className="flex items-center gap-2">
                <svg className={`w-5 h-5 ${timeLeft <= 10 ? 'text-rose-500 animate-spin' : 'text-cyan-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`text-xl font-bold font-mono ${timeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
                  {timeLeft}s
                </span>
              </div>

              <button
                type="button"
                onClick={finishSession}
                className="px-4 py-2 rounded-xl bg-[#270c14] border border-rose-500 text-rose-200 hover:bg-rose-600 hover:text-white text-xs font-semibold font-mono transition-colors active:scale-95"
              >
                Sinovni yakunlash
              </button>
            </div>
          </div>

          {/* ASOSIY SAVOL SAHNASI (BOSHLIK ARENA STOLI) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090d16] border border-slate-800 text-center relative overflow-hidden shadow-2xl">
            {/* Dumaloq stol nuri */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-4">
              DIQQAT, BOSHQARUV SAVOLI:
            </span>

            <p className="text-lg sm:text-2xl font-semibold text-white leading-relaxed max-w-3xl mx-auto">
              “{currentQuestion.question}”
            </p>
          </div>

          {/* JAVOB VARIANTLARI (A, B, C, D) — Qattiq va aniq kontrast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isRight = opt.id === currentQuestion.correct;

              let btnStyle = "bg-[#0b1120] border-slate-800 text-slate-200 hover:bg-[#11192e] hover:border-slate-700";
              if (isDone) {
                if (isRight) {
                  btnStyle = "bg-[#062419] border-emerald-500 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
                } else if (isSelected && !isRight) {
                  btnStyle = "bg-[#270c14] border-rose-500 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.3)]";
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={isDone}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-5 rounded-2xl border text-left flex items-start gap-4 cursor-pointer disabled:cursor-default transition-all duration-200 ${btnStyle}`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                    isDone && isRight
                      ? 'bg-emerald-500 text-slate-950'
                      : isDone && isSelected && !isRight
                        ? 'bg-rose-500 text-slate-950'
                        : isSelected
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-200'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-sm font-medium leading-snug pt-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Natija chiqqandan keyin pastdagi panel */}
          {isDone && (
            <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 w-3 h-3 rounded-full ${isCorrect ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {isCorrect
                      ? `To‘g‘ri javob! +${currentQuestion.xp} XP hisobingizga qo‘shildi.`
                      : isTimeout
                        ? 'Vaqt tugadi!'
                        : 'Afsuski, javob xato.'}
                  </p>
                  {!isCorrect && correctOption && (
                    <p className="text-xs text-slate-400 mt-1">
                      To‘g‘ri javob:{' '}
                      <span className="text-emerald-400 font-medium">
                        {correctOption.id}) {correctOption.text}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={startNextQuestion}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold font-mono shadow-lg shadow-blue-950/40 transition-all active:scale-95"
                >
                  Keyingi savol
                </button>
                <button
                  type="button"
                  onClick={handleBackToLobby}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold font-mono transition-colors active:scale-95"
                >
                  Lobbyga qaytish
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. NATIJALAR OYNASI (FINISH / SUMMARY) */}
      {gameState === 'summary' && (
        <div className="relative z-10 flex flex-col gap-6 animate-fadeIn">
          <div className="relative overflow-hidden rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl p-8 sm:p-12 text-center">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-600/20 via-cyan-500/10 to-transparent blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a33] border border-cyan-500 text-cyan-300 text-[11px] font-mono font-semibold tracking-widest uppercase">
                Sessiya hisoboti
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Sinov yakunlandi! 🎯
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {currentQuestion?.categoryTitle || 'Aralash savollar'} • Jami ishlangan savollar:{' '}
                <strong className="text-white">{stats.totalAnswered} ta</strong>
              </p>

              <div className="mx-auto mt-6 max-w-md rounded-2xl border border-amber-500 bg-[#1a1408] p-6 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-amber-300">
                  Sessiyada to‘plangan ball
                </span>
                <span className="mt-1 flex items-baseline justify-center gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-300">
                    +{stats.totalEarnedXP} XP
                  </span>
                  <span className="text-xs font-mono text-amber-300">to‘plandi</span>
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="rounded-2xl border border-emerald-500 bg-[#062419] p-5 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                    To‘g‘ri javoblar
                  </span>
                  <p className="mt-1 text-2xl font-extrabold font-mono text-emerald-200">
                    {stats.correctCount} ta
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-500 bg-[#270c14] p-5 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">
                    Noto‘g‘ri javoblar
                  </span>
                  <p className="mt-1 text-2xl font-extrabold font-mono text-rose-200">
                    {stats.wrongCount} ta
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-500 bg-[#062029] p-5 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300">
                    Aniqlik darajasi
                  </span>
                  <p className="mt-1 text-2xl font-extrabold font-mono text-cyan-200">
                    {accuracyPercentage}%
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resumeSession}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold font-mono shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all active:scale-95"
                >
                  Davom etish →
                </button>
                <button
                  type="button"
                  onClick={() => startArena(activeCategoryId)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold font-mono shadow-lg shadow-blue-950/40 transition-all active:scale-95"
                >
                  Qayta boshlash
                </button>
                <button
                  type="button"
                  onClick={handleBackToLobby}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold font-mono transition-colors active:scale-95"
                >
                  Lobbyga / Zakovatga qaytish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
