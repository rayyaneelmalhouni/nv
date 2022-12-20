import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Units from "./components/Units";
import ContactUs from "./components/ContactUs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <AboutUs />
      <Units />
      <ContactUs />
    </div>
  );
}

export default App;

