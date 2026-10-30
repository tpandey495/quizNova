import WaitingRoom from "./pages/WaitingRoom";
import Footer from "./ui/components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/waiting-room" element={<WaitingRoom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
