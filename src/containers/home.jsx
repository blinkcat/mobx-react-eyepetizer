import React, { Component } from 'react';
import Screen from 'Components/screen';
import VideoList from 'Components/video-list';
import Footer from 'Components/footer';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{ height: '100%' }}>
				<Screen />
				<VideoList />
				<Footer />
			</div>
		);
	}
}
