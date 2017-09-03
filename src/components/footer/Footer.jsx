import React, { Component } from 'react';
import DownloadButton from 'Components/screen/DownloadButton';
import Modals from 'Components/modal/ModalFactory';
import styles from './footer.css';
import dlbStyles from 'Components/screen/downloadButton.css';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open_ios_download_modal: false,
			open_android_download_modal: false
		};
	}

	toggleIosDownloadModal = () => {
		this.setState({
			open_ios_download_modal: !this.state.open_ios_download_modal
		});
	};

	toggleAndroidDownloadModal = () => {
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
					<DownloadButton
						className={`${styles.buttons} ${dlbStyles.root_black}`}
						onClickIos={this.toggleIosDownloadModal}
						onClickAndroid={this.toggleAndroidDownloadModal}
					/>
				</div>
				<Modals.Ios_download
					open={this.state.open_ios_download_modal}
					onBackdropClick={this.toggleIosDownloadModal}
				/>
				<Modals.Android_download
					open={this.state.open_android_download_modal}
					onBackdropClick={this.toggleAndroidDownloadModal}
				/>
			</div>
		);
	}
}
