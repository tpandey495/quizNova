import { Wifi, Volume2 } from "lucide-react";

const WaitingFooter = () => {
  return (
    <div className="flex w-[50%] justify-center gap-6 py-3 text-xs text-slate-600">
      <div className="flex items-center gap-1">
        <Wifi size={14} className="text-emerald-500" />
        <span>Network: Low Latency (24ms)</span>
      </div>

      <div className="flex items-center gap-1">
        <Volume2 size={14} className="text-indigo-500" />
        <span>Sound SFX Active</span>
      </div>
    </div>
  );
};

export default WaitingFooter;
