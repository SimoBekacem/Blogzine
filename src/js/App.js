import React from "react";
import Grab from "./grab";
import ParametersAndLinks from "./parameters&links";
import Header from "./header";
import TrandingSlider from "./tranding_slider";
import BestTitle from "./best_title";
import TopToday from "./top_today";
import TrendingAndRecent from "./trending&recent";
import SliderNews from "./slider_news";
import Contact from "./contact";
import Links from "./links";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Grab />
      <ParametersAndLinks />
      <Header />
      <TrandingSlider />
      <BestTitle />
      <TopToday />
      <TrendingAndRecent />
      <SliderNews />
      <Contact />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
