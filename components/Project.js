import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import projects from '../public/projects.json';

const parseTechnologiesUsed = technologies => {
	if (technologies.length > 0) {
		if (technologies.length > 5) {
			let firstHalf = technologies.splice(0, Math.ceil(technologies.length / 2));
			let secondHalf = technologies;

			return (
				<div className="row" style={{ textAlign: 'center' }}>
					<div className="col-md-6">
						{firstHalf.map((technology, index) => (
							<p key={technology + `${index}`}>{technology}</p>
						))}
					</div>
					<div className="col-md-6">
						{secondHalf.map((technology, index) => (
							<p key={technology + `${index}`}>{technology}</p>
						))}
					</div>
				</div>
			);
		} else {
			return (
				<div className="row" style={{ textAlign: 'center' }}>
					<div className="col-md-12">
						{technologies.map((technology, index) => (
							<p key={technology + `${index}`}>{technology}</p>
						))}
					</div>
				</div>
			);
		}
	} else {
		return null;
	}
};

const Projects = props => {
	if (projects && projects.length > 0) {
		return projects.map(({ id, name, previewImage, liveUrl, sourceUrl, overview, technologies }, index) => {
			let parsedName = name
				.split(' ')
				.join('')
				.toLowerCase();
			return (
				<ScrollAnimation key={id ? id : parsedName + `_${index}`} offset={60} duration={1} animateIn="fadeIn" animateOnce={true}>
					<hr />
					<div className="project row">
						<div className="col-md-6">
							<div id={id ? id : parsedName + `_${index}`} className="project__header">
								<h6>
									<strong>{name}</strong>
								</h6>
								{previewImage ? <img className="img-thumbnail" src={previewImage} alt="project preview" style={{ width: 300 }} /> : <p>No preview available</p>}
							</div>
							<div className="project__buttons mt-2">
								<a href={liveUrl} target="_blank" rel="noopener noreferrer">
									<button className="btn btn-primary projects__button mr-2">Live Preview</button>
								</a>
								<a href={sourceUrl} target="_blank" rel="noopener noreferrer">
									<button className="btn btn-secondary projects__button mr-2">View Source</button>
								</a>
							</div>
							<div className="project__technologies mt-2">
								<h6>
									<strong>Technologies used</strong>:
								</h6>
								{parseTechnologiesUsed(technologies)}
							</div>
						</div>
						<div className="col-md-6 mt-2">
							<div className="projects__description">
								<h6>
									<strong>Overview</strong>
								</h6>
								<p>{overview}</p>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			);
		});
	} else {
		return <p>No projects to show!</p>;
	}
};

export default Projects;
