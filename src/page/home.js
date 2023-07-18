import React, { useState } from "react";
import NombreProjet from "../component/NombreProjet";
import Header from "../component/Header";
import Projet from "../component/Projet";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState("h-16");

  const handleHeaderHeight = (isExpanded) => {
    if (isExpanded) {
      setHeaderHeight("h-64");
    } else {
      setHeaderHeight("h-16");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">

      <div className={` rounded-lg bg-gray-100 lg:w-64 ${headerHeight}`}>
        <Header handleHeight={handleHeaderHeight} />
      </div>
      <div className="flex flex-col flex-1 lg:ml-32">
        <HeroSection />
        <NombreProjet />
        <Projet />
        <Footer />
      </div>
    </div>
  );
}
