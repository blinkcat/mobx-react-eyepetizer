import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import Content from './Content';
import ImageList from './ImgList';
import Modals  from 'Components/modal/ModalFactory';
import styles from './screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open_wechat_modal: false
		};
	}

	toggleWechatModal = () => {
		this.setState({
			open_wechat_modal: !this.state.open_wechat_modal
		});
	};

	render() {
		return (
			<div className={styles.root}>
				<Menu clickWechat={this.toggleWechatModal} className={styles.menu} />
				<Content />
				<div className={styles.cover} />
				<VideoPlayer
					poster="http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg"
					src="http://static.kaiyanapp.com/eyepetizer-web/homepage.mp4"
				/>
				<ImageList />
				<Modals.Wechat
					open={this.state.open_wechat_modal}
					onBackdropClick={this.toggleWechatModal}
				/>
			</div>
		);
	}
}

function VideoPlayer({ poster, src } = {}) {
	return (
		<div className={styles.videow}>
			<video className={styles.video} autoPlay loop poster={poster} src={src} />
		</div>
	);
}

VideoPlayer.propTypes = {
	poster: PropTypes.string,
	src: PropTypes.string.isRequired
};

export { Screen as default, VideoPlayer };
