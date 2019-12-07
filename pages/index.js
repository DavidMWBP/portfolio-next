import Head from 'next/head';
import React from 'react';
import './index.scss';

import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import Languages from '../components/Languages';
import MainContainer from '../components/MainContainer';
import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer';

const Home = () => (
	<div>
		<Head>
			<title>David Wolf - Portfolio</title>
		</Head>
		<NavBar />
		<Jumbotron />
		<Languages />
		<MainContainer>
			<ProjectsList />
		</MainContainer>
		<Footer />
	</div>
);

export default Home;
