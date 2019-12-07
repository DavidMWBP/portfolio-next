import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';



class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Component />
		)
	}
}

export default MyApp;
