import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import socialMediaData from './socialMediaData.json';
import './Jumbotron.scss';

const renderButtons = startDelay => {
	return socialMediaData.map(({ title, href, faName }, index) => {
		if (index > 0) startDelay += 100;
		return (
			<ScrollAnimation key={title} offset={30} duration={1.2} delay={startDelay} animateIn="bounceIn" animateOnce={true} style={{ display: 'inline-block' }}>
				<a key={faName} href={href} target="_blank" rel="noopener noreferrer" title={title}>
					<i className={`${faName} mx-4 portfolio__jumbotron__socialmedia__icon`} aria-hidden="true"></i>
					<span className="d-none">{title}</span>
				</a>
			</ScrollAnimation>
		);
	});
};

const Jumbotron = props => {
	return (
		<div id="portfolio__jumbotron" className="jumbotron jumbotron-fluid">
			<div id="portfolio__jumbotron__container" className="container-fluid">
				<ScrollAnimation offset={30} duration={1.5} animateIn="fadeIn" animateOnce={true}>
					<h1>
						<strong>David Wolf</strong>
					</h1>
					<p className="lead">
						Software Developer
						<br />
						<i className="fa fa-map-marker" aria-hidden="true"></i> Amsterdam Area
					</p>
				</ScrollAnimation>
			</div>

			<div id="portfolio__jumbotron__socialmedia" className="container-fluid">
				{renderButtons(500)}
			</div>
		</div>
	);
};

export default Jumbotron;
