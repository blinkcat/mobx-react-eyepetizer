import React, { Component } from 'react';
import DownLoadButton from 'Components/screen/down_load_button';
import Modals from 'Components/modal/modal_factory';
import styles from './footer.css';
import dlb_styles from 'Components/screen/down_load_button.css';

export default class Footer extends Component {
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
			<div className={styles.root}>
				<div className={styles.intro} />
				<div className={styles.images}>
					<div className={styles.icon} />
					<div className={styles.logo} />
					<DownLoadButton
						className={`${styles.buttons} ${dlb_styles.root_black}`}
						click_ios={this.toggle_ios_download_modal}
						click_android={this.toggle_android_download_modal}
					/>
				</div>
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
