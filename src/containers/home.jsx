import React from 'react';
import Screen from 'Components/screen';
import VideoList from 'Components/video-list';
import Footer from 'Components/footer';

export default () => (
	<div style={{ height: '100%' }}>
		<Screen />
		<VideoList />
		<Footer />
	</div>
);
