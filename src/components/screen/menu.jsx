import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './menu.css';

export default function Menu({ className, clickWechat }) {
	return (
		<div className={classNames(styles.root, { [className]: className })}>
			<a href="#" onClick={clickWechat} className={styles.item_wechat} />
			<a href="http://weibo.com/eyepetizer" className={styles.item_weibo} />
			<a href="mailto:bd@eyepetizer.net" className={styles.item_email} />
		</div>
	);
}

Menu.propTypes = {
	clickWechat: PropTypes.func,
	className: PropTypes.string
};

Menu.defaultProps = {
	clickWechat: null,
	className: ''
};
