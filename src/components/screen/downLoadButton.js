import React, { Component } from 'react';
import styles from './downLoadButton.css';
import Modal from 'Components/modal';

export default class DownLoadButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			is_ios_download_modal_shown: false,
			is_android_download_modal_shown: false
		};
	}

	show_ios_download_modal = e => {
		this.setState({
			is_ios_download_modal_shown: true
		});
		e.preventDefault();
	};

	hide_ios_download_modal = () => {
		this.setState({
			is_ios_download_modal_shown: false
		});
	};

	show_android_download_modal = e => {
		this.setState({
			is_android_download_modal_shown: true
		});
		e.preventDefault();
	};

	hide_android_download_modal = () => {
		this.setState({
			is_android_download_modal_shown: false
		});
	};

	render() {
		return (
			<div>
				<div className={styles.dlb}>
					<a href="#" onClick={this.show_ios_download_modal} className={styles.ios} />
					<a
						href="#"
						onClick={this.show_android_download_modal}
						className={styles.android}
					/>
				</div>
				<Modal
					img_src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png"
					text="扫描二维码<br>下载 iOS 版开眼<br><a href='#'>点击跳转至 App Store</a>"
					show={this.state.is_ios_download_modal_shown}
					hidden_cb={this.hide_ios_download_modal}
				/>
				<Modal
					img_src="http:////static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_android.8915ce9c.png"
					text="扫描二维码<br>下载 Android 版开眼<br><a href='#'>点击直接下载 apk</a>"
					show={this.state.is_android_download_modal_shown}
					hidden_cb={this.hide_android_download_modal}
				/>
			</div>
		);
	}
}
