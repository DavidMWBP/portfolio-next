import React from 'react';
import './Footer.scss';

function copyrightText() {
	var creationDate = '2019';
	var currentYear = new Date().getFullYear().toString();

	if (creationDate === currentYear) {
		return `© 2019 davidwolf.me All Rights Reserved`;
	}

	return `© 2019-${new Date().getFullYear()} davidwolf.me All Rights Reserved`;
}

const Footer = props => {
	return (
		<div id="portfolio__footer">
			<div id="portfolio__footer__content">
				<h6>{copyrightText()}</h6>
			</div>
		</div>
	);
};

export default Footer;
