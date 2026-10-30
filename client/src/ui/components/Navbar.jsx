
function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between gap-4 border-b border-violet-100 bg-white px-5 py-3">

      <div className="flex shrink-0 items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
          Q
        </div>

        <span className="text-sm font-bold text-slate-800">QuizNova</span>

        <span className="flex items-center gap-1.5 rounded-full bg-violet-50 px-2 py-1 text-[9px] text-indigo-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          SESSION #QN-8492
        </span>
      </div>


      <div className="flex items-center gap-1">
        <a
          href="/waiting-room"
          className="rounded-md bg-indigo-500 px-3 py-2 text-xs font-semibold text-white"
        >
          Lobby
        </a>

        <a
          href="/arena"
          className="whitespace-nowrap rounded-md px-2 py-2 text-xs text-slate-600 hover:bg-violet-50"
        >
          Live Arena
        </a>

        <a
          href="/leaderboard"
          className="whitespace-nowrap rounded-md px-2 py-2 text-xs text-slate-600 hover:bg-violet-50"
        >
          Leaderboard
        </a>

        <a
          href="/overview"
          className="rounded-md px-2 py-2 text-xs text-slate-600 hover:bg-violet-50"
        >
          Overview
        </a>
      </div>

      {/* Points and Profile */}
      <div className="flex shrink-0 items-center gap-3">
        <div className="whitespace-nowrap rounded-lg bg-violet-50 px-2 py-1.5 text-[10px] font-semibold text-slate-700">
          <span className="mr-1 text-indigo-500">ϟ</span>
          1,420 PTS
        </div>

        <button
          type="button"
          aria-label="User profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white hover:bg-indigo-600"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
