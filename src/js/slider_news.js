import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import NewsSlides from './objects/NewsSlides';
import SlideNewsItem from './slide_news_item';

const SliderNews = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				slidesPerView={3}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper"
			>
				{NewsSlides.map((item) => {
					return (
						<SwiperSlide>
							<SlideNewsItem news={item} />
						</SwiperSlide>
					);
				})}

				<div className="autoplay-progress" slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}></svg>
					<span
						style={{ display: 'none' }}
						ref={progressContent}
					></span>
				</div>
			</Swiper>
		</>
	);
};
export default SliderNews;
