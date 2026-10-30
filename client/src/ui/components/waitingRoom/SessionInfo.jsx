
const SessionInfo = () => {
  return (
    <div className="mx-auto w-[50%] max-w-xl px-3 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold text-violet-500">
            LIVE ARENA SESSION
          </p>
          <h3 className="text-sm font-bold text-black"
              style={{ color: "#000000", opacity: 1 }}
          >
            Web Architecture & Modern Frontend 2026
          </h3>
        </div>

        <div className="rounded-lg bg-white px-2 py-1 shadow-sm">
          <p className="text-[8px] text-gray-500">PIN CODE</p>
          <p className="text-xs font-bold tracking-wider text-indigo-600">
            849 201
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[8px] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-slate-600">Waiting for Host to start</span>
          <span className="mx-1 text-slate-300">•</span>
          <span className="font-semibold text-indigo-500">LOBBY ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default SessionInfo;
