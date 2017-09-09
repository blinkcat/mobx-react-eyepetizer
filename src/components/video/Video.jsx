import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import styles from './video.css';

export default class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			play: false
		};
		this.updateHeight = debounce(this.updateVideoHeight, 100);
	}

	updateVideoHeight = () => {
		const container = this.video.parentNode;
		container.style.height = this.video.style.height = `${container.offsetWidth / 16 * 9}px`;
	};

	handleClick = () => {
		this.setState(
			{
				play: true
			},
			() => {
				this.video.play();
				this.video.setAttribute('controls', true);
			}
		);
	};

	componentDidMount() {
		this.updateVideoHeight();
		window.addEventListener('resize', this.updateHeight);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateHeight);
	}

	render() {
		const { playUrl, coverForFeed } = this.props;
		return (
			<div className={styles.root}>
				<video
					ref={video => {
						this.video = video;
					}}
					className={styles.video}
					playsInline
					preload="none"
					src={playUrl}
				/>
				{this.state.play ? null : (
					<div
						className={styles.cover}
						style={{
							backgroundImage: `url(${coverForFeed})`
						}}
					/>
				)}
				{this.state.play ? null : (
					<div className={styles.play_button} onClick={this.handleClick} />
				)}
			</div>
		);
	}
}

Video.propTypes = {
	playUrl: PropTypes.string.isRequired,
	coverForFeed: PropTypes.string
};
