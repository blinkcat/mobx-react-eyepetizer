import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './loading.css';

export default function Loading({ className }) {
	return (
		<div className={classNames(styles.root, { [className]: className })}>
			<div className={styles.out} />
			<div className={styles.in} />
		</div>
	);
}

Loading.propTypes = {
	className: PropTypes.string
};

Loading.defaultProps = {
	className: ''
};
