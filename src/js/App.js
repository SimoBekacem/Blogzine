import React from 'react';
import Grab from './grab';
import ParametersAndLinks from './parameters&links';
import Header from './header';
import TrandingSlider from './tranding_slider';
import BestTitle from './best_title';
import TopToday from './top_today';
import TrendingAndRecent from './trending&recent';
import News from './news';
import Contact from './contact';
import Links from './links';
import Footer from './footer';
import { useSelector } from 'react-redux';
const html = document.querySelector('html');
function App() {
	const fontSize = useSelector((state) => state.config.fontSize);
	const darkMode = useSelector((state) => state.config.darkMode);
	html.style.fontSize = fontSize + '%';
	return (
		<div className={`App ${darkMode}`}>
			<Grab />
			<ParametersAndLinks />
			<Header />
			<TrandingSlider />
			<BestTitle />
			<TopToday />
			<TrendingAndRecent />
			<News />
			<Contact />
			<Links />
			<Footer />
		</div>
	);
}

export default App;
