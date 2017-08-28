import React, { Component } from 'react';
import Menu from './menu';
import Content from './content';
import styles from './screen.css';

export default class Screen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.screen}>
				<Menu />
				<Content />
				<div className={styles.cover} />
				<VideoPlayer
					poster="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg"
					src="//static.kaiyanapp.com/eyepetizer-web/homepage.mp4"
				/>
			</div>
		);
	}
}

function VideoPlayer({ poster, src } = {}) {
	return (
		<div className={styles.videow}>
			<video className={styles.video} autoPlay={true} loop={true} poster={poster} src={src} />
		</div>
	);
}
