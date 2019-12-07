import React from 'react';
import Container from '../components/Container';
import Project from '../components/Project';

const ProjectsList = () => {
	return (
		<div id="projects" style={{ textAlign: 'center' }}>
			<Container className="container my-4">
				<h5>
					<strong>Projects</strong>
				</h5>
				<Project />
			</Container>
		</div>
	);
};

export default ProjectsList;
