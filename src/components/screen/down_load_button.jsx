import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './down_load_button.css';

export default class DownLoadButton extends Component {
	constructor(props) {
		super(props);
	}

	handle_ios_click = e => {
		const { click_ios } = this.props;
		if (click_ios) {
			click_ios(e);
		}
		e.preventDefault();
	};

	handle_android_click = e => {
		const { click_android } = this.props;
		if (click_android) {
			click_android(e);
		}
		e.preventDefault();
	};

	render() {
		const { className } = this.props;
		return (
			<div className={classNames(styles.root, { [className]: className })}>
				<a href="#" onClick={this.handle_ios_click} className={styles.ios} />
				<a href="#" onClick={this.handle_android_click} className={styles.android} />
			</div>
		);
	}
}

DownLoadButton.propTypes = {
	className: PropTypes.string,
	click_ios: PropTypes.func,
	click_android: PropTypes.func
};
