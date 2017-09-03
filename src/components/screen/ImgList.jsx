import React, { Component } from 'react';
import styles from './imgList.css';

export default class ImageList extends Component {
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
			<div className={styles.root}>
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
