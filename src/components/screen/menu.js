import React, { Component } from 'react';
import styles from './menu.css';
import Modal from 'Components/modal';

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			is_wechat_modal_shown: false
		};
	}

	show_wechat_modal = e => {
		this.setState({
			is_wechat_modal_shown: true
		});
		e.preventDefault();
	};

	hide_wechat_moda = () => {
		this.setState({
			is_wechat_modal_shown: false
		});
	};

	render() {
		let show = this.state.is_wechat_modal_shown;
		let text = '扫描二维码<br/>关注「开眼」微信公众号';
		let img_src =
			'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg';

		return (
			<div>
				<div className={styles.menu}>
					<a href="#" onClick={this.show_wechat_modal} className={styles.wechat} />
					<a href="http://weibo.com/eyepetizer" className={styles.weibo} />
					<a href="mailto:bd@eyepetizer.net" className={styles.email} />
				</div>
				<Modal
					hidden_cb={this.hide_wechat_moda}
					show={show}
					text={text}
					img_src={img_src}
				/>
			</div>
		);
	}
}
