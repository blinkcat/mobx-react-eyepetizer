import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import second2minute from 'Utils/second2minute';
import PropTypes from 'prop-types';
import styles from './videoList.css';
import { Link } from 'react-router-dom';

@inject('videoListStore')
@observer
class VideoList extends Component {
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
				<VideoDate timeStamp={videoListStore.date} />
				<VideoItems list={videoListStore.videoList} />
			</div>
		);
	}
}

function VideoDate({ timeStamp }) {
	const arr = Date(timeStamp).split(' ');
	return <div className={styles.date}>{`- ${arr[1]}. ${arr[2]} -`}</div>;
}

VideoDate.propTypes = {
	timeStamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VideoDate.defaultProps = {
	timeStamp: Date.now()
};

function VideoItems({ list }) {
	return <div>{list.map(v => <VideoItem {...v} key={v.id} />)}</div>;
}

function VideoItem(props) {
	const { id, bg, title, meta } = convert(props);
	return (
		<Link
			to={`/detail/${id}`}
			className={styles.video}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className={styles.cover} />
			<div className={styles.title}>{title}</div>
			<div className={styles.meta}>{meta}</div>
		</Link>
	);
}

VideoItem.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

function convert(data) {
	return {
		id: data.id,
		title: data.title,
		meta: `#${data.category} / ${second2minute(data.duration)}`,
		bg: data.coverForFeed
	};
}

export { VideoList as default, VideoDate, Video, convert };
