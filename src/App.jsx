import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="inter-font bg-[#F5F5F5]">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
