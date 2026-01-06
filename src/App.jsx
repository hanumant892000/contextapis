import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BalanceState from "./context/BalanceState";

function App() {
  return (
    <>
      <BalanceState>
        <div className="bg-gray-800 min-h-screen">
          <Navbar />
          <HeroSection />
        </div>
      </BalanceState>
    </>
  );
}

export default App;
