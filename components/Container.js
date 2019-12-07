import React from 'react';
import './Container.scss';

const Container = props => {
	return (
		<div style={props.style} className={`portfolio__Container ${props.className}`}>
			{props.children}
		</div>
	);
};

Container.defaultProps = {
	className: 'container'
};

export default Container;
