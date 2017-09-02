import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styles from './video_list.css';

@inject('videoListStore')
@observer
export default class VideoList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { videoListStore } = this.props;
		if (videoListStore.videoList.length === 0 && videoListStore.fetching_status !== 'pending') {
			videoListStore.getData();
		}
	}

	render() {
		const { videoListStore } = this.props;
		return (
			<div className={styles.video_list}>
				<VideoDate time={videoListStore.date} />
				{videoListStore.videoList.map(v => {
					return <Video {...v} key={v.id} />;
				})}
			</div>
		);
	}
}

function VideoDate({ time }) {
	const arr = Date(time).split(' ');
	return <div className={styles.date}>{`- ${arr[1]}. ${arr[2]} -`}</div>;
}

function Video(props) {
	const { id, bg, title, meta } = convert(props);
	return (
		<a
			href={`/detail/${id}`}
			className={styles.video}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className={styles.cover} />
			<div className={styles.title}>{title}</div>
			<div className={styles.meta}>{meta}</div>
		</a>
	);
}

function convert(data) {
	return {
		id: data.id,
		title: data.title,
		meta: `#${data.category} / ${second2minute(data.duration)}`,
		bg: data.coverForFeed
	};
}

function second2minute(second) {
	second = ~~second;
	return `${Math.floor(second / 60)}' ${second % 60}"`;
}
