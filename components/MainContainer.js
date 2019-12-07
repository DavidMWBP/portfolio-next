import React from 'react';
import './MainContainer.scss';

const MainContainer = props => {
	return (
		<div id="portfolio__MainContainer" className={props.className}>
			{props.children}
		</div>
	);
};

MainContainer.defaultProps = {
	className: 'container'
};

export default MainContainer;
