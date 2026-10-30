import { Radio, ShieldCheck, Lightbulb, Play, LogOut } from "lucide-react";
import Participants from "./Participants";

const WaitingRoomCard = () => (
  <div className="mx-auto w-[50%] max-w-3xl rounded-2xl border-t-4 border-indigo-500 bg-white p-6 shadow-lg">
    <div className="mb-5 text-center">
      <Radio
        size={48}
        className="mx-auto mb-4 animate-spin text-indigo-600 [animation-duration:3s]"
      />

      <h2 className="text-sm font-bold" style={{ color: "#000000" }}>
        You're in!
      </h2>

      <p className="text-xs text-slate-500">
        The host is preparing the session. The arena will unlock automatically
        once launched.
      </p>
    </div>

    <div className="mb-3 flex items-center justify-between rounded-xl bg-indigo-50 p-3">
      <div>
        <p className="font-semibold text-slate-800">
          Alex Rivera <span className="text-indigo-500">You</span>
        </p>

        <p className="text-xs text-slate-500">Registered Candidate</p>
      </div>

      <span className="flex items-center gap-1 text-xs text-emerald-600">
        <ShieldCheck size={14} /> Ready
      </span>
    </div>

    <div className="mb-3 rounded-xl bg-violet-50 p-3">
      <Participants />
    </div>

    <p className="mb-5 rounded-lg bg-purple-50 p-2 text-[11px] text-purple-700">
      <Lightbulb size={15} className="mr-1 inline" />
      <b>Pro Tip:</b> Speed matters! Faster accurate responses unlock extra
      bonus points.
    </p>

    <div className="flex flex-wrap justify-center gap-3">
      <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-2 py-2 text-xs text-white transition-colors hover:bg-indigo-700">
        <Play size={14} /> Join Arena (Host Starting...)
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-2 py-2 text-xs text-slate-600 transition-colors hover:bg-slate-100">
        <LogOut size={14} /> Leave Room
      </button>
    </div>
  </div>
);

export default WaitingRoomCard;
