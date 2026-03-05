import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Ticket from "./components/Ticket";

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const updateCounts = (inProgress, resolved) => {
    setInProgressCount(inProgress);
    setResolvedCount(resolved);
  };

  return (
    <>
      <div className="inter-font bg-[#F5F5F5]">
        <Navbar />
        <Hero inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
        <Ticket updateCounts={updateCounts} />
      </div>
    </>
  );
}

export default App;
