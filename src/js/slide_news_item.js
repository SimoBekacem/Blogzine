import React from 'react';

import { SwiperSlide } from 'swiper/react';

const SlideNewsItem = ({ news }) => {
	let new_img = require(`../images/${news.img}`);
	let autor_img = require(`../images/${news.autor_img}`);
	return (
		<div key={news.id} className="SliderNews__slidercontainer__slide">
			<div className="SliderNews__slidercontainer__slide__image">
				<img src={new_img} alt={news.title} />
				<span>{news.tag}</span>
			</div>
			<div className="SliderNews__slidercontainer__slide__content">
				<div className="SliderNews__slidercontainer__slide__content__title">
					<h1>{news.title}</h1>
				</div>
				<div className="SliderNews__slidercontainer__slide__content__autor">
					<div className="SliderNews__slidercontainer__slide__content__autor__image">
						<img src={autor_img} alt={news.autor} />
					</div>
					<div className="SliderNews__slidercontainer__slide__content__autor__name">
						<p>{news.autor}</p>
					</div>
					<div className="SliderNews__slidercontainer__slide__content__autor__date">
						<p>{news.date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SlideNewsItem;
