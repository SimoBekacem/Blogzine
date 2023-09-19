import React from 'react';

import SliderNews from './slider_news';

const News = () => {
	return (
		<div className="SliderNews">
			<div className="SliderNews__title">
				<h1>
					<i className="fa-solid fa-bullhorn"></i>Sponsored news
				</h1>
				<p>News from our sponsors</p>
			</div>
			<SliderNews />
		</div>
	);
};
export default News;
