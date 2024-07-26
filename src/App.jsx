import React from 'react'

import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
// import { Posters } from "./components/posters";
import { Sponsors } from "./components/sponsors";
import { Speakers } from "./components/speakers";
import { Team } from "./components/team";
// import { Students } from "./components/students";
// import { Schedule } from "./components/schedule";
import { Clinicans } from "./components/clinicans";
// import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: false,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team}/>
      <Speakers data={landingPageData.Speakers} />
      <Clinicans data={landingPageData.Clinicans} />
      {/* <Schedule data={landingPageData} />
      <Posters data={landingPageData.About} />
      <Students data={landingPageData.Students} />*/}
      <Sponsors data={landingPageData.Sponsors} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
