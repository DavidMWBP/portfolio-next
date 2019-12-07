import React from 'react';

const projects = [
	{
		id: 'personalportfolio',
		name: 'Personal Portfolio',
		previewImage: '/portfolio.png',
		liveUrl: 'https://davidwolf.me/',
		sourceUrl: 'https://github.com/DavidMWBP/portfolio-next',
		technologies: ['Javascript', 'NodeJS', 'React', 'Webpack', 'NextJS', 'Babel', 'HTML5', 'CSS3', 'Sass'],
		overview: 'My own personal portfolio created in react.'
	}
];

const NavBar = props => {
	const classNames = {
		navBarButton: props.isToggled ? 'navbar-toggler' : 'navbar-toggler collapsed',
		navBarCollapse: props.isToggled ? 'navbar-collapse collapse show' : 'navbar-collapse collapse'
	};

	return (
		<nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
			<a className="navbar-brand" href="#top">
				DW
			</a>
			<button
				className={classNames.navBarButton}
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded={props.isToggled}
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className={classNames.navBarCollapse} id="navbarNavAltMarkup">
				<ul className="navbar-nav">
					<a className="nav-item nav-link active" href="#top">
						Home<span className="sr-only">(current)</span>
					</a>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#top" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Projects
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							{projects.map(project => {
								return project.id ? (
									<a key={project.id} className="dropdown-item" href={`#${project.id}`}>
										{project.name}
									</a>
								) : null;
							})}
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
