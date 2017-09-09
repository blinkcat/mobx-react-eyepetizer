import React from 'react';
import PropTypes from 'prop-types';
import styles from './videoInfo.css';
import { pick } from 'lodash';
import second2minute from 'Utils/second2minute';

export default function VideoInfo(props) {
	const metaInfo = pick(props, ['title', 'category', 'duration', 'description']);
	return (
		<div>
			<VideoMeta {...metaInfo} />
			<div className={styles.long_divide} />
			<div className={styles.launch}>
				<div className={styles.logo} />
				<a href="https://lkme.cc/3rC/Umc43xdcI">
					<button className={styles.button} />
				</a>
			</div>
			<div className={styles.long_divide} />
		</div>
	);
}

function VideoMeta(props) {
	return (
		<div className={styles.meta}>
			<h1 className={styles.h1}>{props.title}</h1>
			<div className={styles.divide} />
			<p className={styles.p}>{`${props.category} / ${second2minute(props.duration)}`}</p>
			<p className={styles.description}>{props.description}</p>
		</div>
	);
}

VideoMeta.propTypes = {
	title: PropTypes.string,
	category: PropTypes.string,
	duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	description: PropTypes.string
};

VideoMeta.defaultProps = {
	title: '',
	category: '',
	duration: 0,
	description: ''
};
