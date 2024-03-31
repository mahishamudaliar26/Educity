import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Program/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
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
          setPlayState={setPlayState}
        />
        <Title subTitle="Gallery" title="Campus photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What our student says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
