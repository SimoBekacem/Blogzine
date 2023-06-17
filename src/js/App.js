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
const html = document.querySelector('html');
function App() {
  const [darkMode, setDarkMode] = React.useState('');
  const switchtodark = (dark) => {
    setDarkMode(
      dark ? 'App_darkmode' : ''
    );
  }
  const switchtodarkautomatic = () => {
    const hour = new Date().getHours();
    if (hour >= 18 || hour <= 6) {
      setDarkMode('App_darkmode');
    } else {
      setDarkMode('');
    }
  }
  const changefontsize = (size) => {
    if(size==='A-'){
      size = 50;
    }else if(size==='A+'){
      size = 80;
    }else{
      size = 62.5;
    }
    html.style.fontSize = size + '%';
  }
  return (
    <div className={`App ${darkMode}`}>
      <Grab />
      <ParametersAndLinks changefontsize={changefontsize} autodarkmode={switchtodarkautomatic} darkmode={switchtodark}/>
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
