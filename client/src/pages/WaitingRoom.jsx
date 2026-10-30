import SessionInfo from "../ui/components/waitingRoom/SessionInfo";
import WaitingRoomCard from "../ui/components/waitingRoom/WaitingRoomCard";
import WaitingFooter from "../ui/components/waitingRoom/WaitingFooter";
import Navbar from "../ui/components/Navbar";

const WaitingRoom = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center px-4">
        <SessionInfo />
        <WaitingRoomCard />
        <WaitingFooter />
      </div>
    </>
  );
};

export default WaitingRoom;
