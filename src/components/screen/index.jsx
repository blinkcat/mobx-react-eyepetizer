import React, { Component } from 'react';
import Menu from './menu';
import Content from './content';
import Modals from 'Components/modal/modal_factory';
import styles from './screen.css';

export default class Screen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open_wechat_modal: false
		};
	}

	toggle_wechat_modal = () => {
		this.setState({
			open_wechat_modal: !this.state.open_wechat_modal
		});
	};

	render() {
		return (
			<div className={styles.root}>
				<Menu click_wechat={this.toggle_wechat_modal} className={styles.menu} />
				<Content />
				<div className={styles.cover} />
				<VideoPlayer
					poster="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg"
					src="//static.kaiyanapp.com/eyepetizer-web/homepage.mp4"
				/>
				<ImageList />
				<Modals.Wechat
					open={this.state.open_wechat_modal}
					onBackdropClick={this.toggle_wechat_modal}
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

class ImageList extends Component {
	images = [
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
		'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
	];

	len = this.images.length;

	constructor(props) {
		super(props);
		this.state = {
			curIndex: 0
		};
	}

	tick = () => {
		this.setState(prevState => {
			return {
				curIndex: (prevState.curIndex + 1) % this.len
			};
		});
	};

	componentDidMount() {
		this.interval = setInterval(this.tick, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { curIndex } = this.state;
		return (
			<div className={styles.imgList}>
				{this.images.map((v, i) => {
					return (
						<img
							src={v}
							className={curIndex === i ? styles.img : styles.hide}
							key={i}
						/>
					);
				})}
			</div>
		);
	}
}
