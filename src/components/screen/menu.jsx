import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './menu.css';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { className = '', click_wechat } = this.props;

		return (
			<div className={classNames(styles.root, { [className]: className })}>
				<a href="#" onClick={click_wechat} className={styles.item_wechat} />
				<a href="http://weibo.com/eyepetizer" className={styles.item_weibo} />
				<a href="mailto:bd@eyepetizer.net" className={styles.item_email} />
			</div>
		);
	}
}

Menu.propTypes = {
	click_wechat: PropTypes.func,
	className: PropTypes.string
};
