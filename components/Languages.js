import React from 'react';
import Container from '../components/Container';

import './Languages.scss';

const PortfolioLanguages = props => {
	return (
		<div id="portfolio__Languages" className="shadow">
			<Container>
				<div className="row" style={{ justifyContent: 'center' }}>
					<img className="image portfolio__Languages__image" src="/jshtmlcss-logo.png" alt="javascript-html-css" />
					<img className="image portfolio__Languages__image" src="/nodejs-logo.png" alt="nodejs" />
					<img className="image portfolio__Languages__image" src="/react-logo.png" alt="react" />
					<img className="image portfolio__Languages__image" src="/bootstrap-logo.png" alt="bootstrap" />
					<img className="image portfolio__Languages__image" src="/github-logo.png" alt="github" />
					<img className="image portfolio__Languages__image" src="/mysql-logo.png" alt="mysql" />
				</div>
			</Container>
		</div>
	);
};

export default PortfolioLanguages;
