
function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t border-indigo-200 bg-[#f7f7ff] px-5 py-3 text-[10px] text-slate-600">
      <p>
        © 2025 QuizNova AI Platform. Built for active participation.
      </p>

      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
        <span>Low-Latency Mode Active</span>
      </div>
    </footer>
  );
}

export default Footer;
