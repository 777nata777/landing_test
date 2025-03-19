import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WeeklyTop from "./components/WeeklyTop/WeeklyTop";
import SellNft from "./components/SellNft/SellNFT";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
        <Header />
        <Hero />
        <WeeklyTop />
        <SellNft/>
        <Footer/>
      </>
  );
}

export default App;
