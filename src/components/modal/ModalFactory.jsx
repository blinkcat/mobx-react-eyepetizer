import React from 'react';
import Modal from './index';

const ModalFacotry = {
	Ios_download: props => (
		<Modal
			img_src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png"
			text={
				<div>
					扫描二维码
					<br />
					下载 iOS 版开眼
					<br />
					<a href="#">点击跳转至 App Store</a>
				</div>
			}
			open={props.open}
			onBackdropClick={props.onBackdropClick}
		/>
	),
	Android_download: props => (
		<Modal
			img_src="http:////static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_android.8915ce9c.png"
			text={
				<div>
					扫描二维码<br />下载 Android 版开眼<br />
					<a href="#">点击直接下载 apk</a>
				</div>
			}
			open={props.open}
			onBackdropClick={props.onBackdropClick}
		/>
	),
	Wechat: props => (
		<Modal
			text={
				<div>
					扫描二维码<br />关注「开眼」微信公众号
				</div>
			}
			img_src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg"
			open={props.open}
			onBackdropClick={props.onBackdropClick}
		/>
	)
};

export default ModalFacotry;
