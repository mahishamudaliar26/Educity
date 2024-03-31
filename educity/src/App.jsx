import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Program/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What we offer" />
        <Programs />
        <About
          subTitle="ABOUT UNIVERSITY"
          title="Nurturing Tommorow's Leader Today"
        />
        <Title subTitle="Gallery" title="Campus photos" />
      </div>
    </div>
  );
};

export default App;
