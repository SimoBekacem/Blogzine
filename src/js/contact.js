import React from 'react';
const Contact = () => {
	return (
		<div className="Contact">
			<div className="Contact__logo">
				<img src={require('../images/logo.png')} width={'50px'} />
				<h1>ZINE</h1>
			</div>
			<p className="Contact__text">
				The next-generation blog, news, and magazine theme for you to
				start sharing your stories today! This Bootstrap 5 based theme
				is ideal for all types of sites that deliver the news.
			</p>
			<div className="Contact__form">
				<form>
					<input type="email" placeholder="Your Email" />
					<button>Subscribe</button>
				</form>
				<p>
					By subscribing you agree to our{' '}
					<a href="#">Terms of Service</a> and{' '}
					<a href="#">Privacy Policy</a>
				</p>
			</div>
		</div>
	);
};
export default Contact;
