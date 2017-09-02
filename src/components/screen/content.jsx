import React, { Component } from 'react';
import DownLoadButton from 'Components/screen/down_load_button';
import Modals from 'Components/modal/modal_factory';
import styles from './content.css';

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open_ios_download_modal: false,
			open_android_download_modal: false
		};
	}

	toggle_ios_download_modal = () => {
		this.setState({
			open_ios_download_modal: !this.state.open_ios_download_modal
		});
	};

	toggle_android_download_modal = () => {
		this.setState({
			open_android_download_modal: !this.state.open_android_download_modal
		});
	};

	render() {
		return (
			<div>
				<div className={styles.logo} />
				<div className={styles.intro} />
				<DownLoadButton
					className={styles.content_dbl}
					click_ios={this.toggle_ios_download_modal}
					click_android={this.toggle_android_download_modal}
				/>
				<a href="http://open.eyepetizer.net/#!/landing" className={styles.entry}>
					<div className={styles.audit} />
					<p className={styles.p}>作者入口</p>
				</a>
				<Modals.Ios_download
					open={this.state.open_ios_download_modal}
					onBackdropClick={this.toggle_ios_download_modal}
				/>
				<Modals.Android_download
					open={this.state.open_android_download_modal}
					onBackdropClick={this.toggle_android_download_modal}
				/>
			</div>
		);
	}
}
