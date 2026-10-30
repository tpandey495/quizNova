const Participants = () => (
  <div className="h-10 flex items-center justify-between rounded-2xl bg-[#F5F5FA] p-3">
    <div>
      <h3 className="text-sm font-bold text-slate-900">28 Participants</h3>
      <p className="text-xs font-medium text-slate-500">
        Synchronized in Lobby
      </p>
    </div>

    <div className="flex items-center -space-x-2.5">
      {[12, 33, 5].map((id) => (
        <img
          key={id}
          src={`https://i.pravatar.cc/100?img=${id}`}
          alt="Participant"
          className="h-7 w-7 rounded-full border-2 border-white object-cover"
        />
      ))}

      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#DCE4FA] text-[10px] font-bold text-[#3B66D6]">
        +25
      </div>
    </div>
  </div>
);

export default Participants;
