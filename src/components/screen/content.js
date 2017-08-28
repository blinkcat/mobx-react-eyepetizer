import React, { Component } from 'react';
import DownLoadButton from 'Components/screen/downLoadButton';
import styles from './content.css';

export default class Content extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className={styles.logo} />
				<div className={styles.intro} />
				<DownLoadButton />
				<a href="http://open.eyepetizer.net/#!/landing" className={styles.entry}>
					<div className={styles.audit} />
					<p className={styles.p}>作者入口</p>
				</a>
			</div>
		);
	}
}
