import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './downloadButton.css';

export default class DownLoadButton extends Component {
	constructor(props) {
		super(props);
	}

	handleIosClick = e => {
		const { onClickIos } = this.props;
		if (onClickIos) {
			onClickIos(e);
		}
		e.preventDefault();
	};

	handleAndroidClick = e => {
		const { onClickAndroid } = this.props;
		if (onClickAndroid) {
			onClickAndroid(e);
		}
		e.preventDefault();
	};

	render() {
		const { className } = this.props;
		return (
			<div className={classNames(styles.root, { [className]: className })}>
				<a href="#" onClick={this.handleIosClick} className={styles.ios} />
				<a href="#" onClick={this.handleAndroidClick} className={styles.android} />
			</div>
		);
	}
}

DownLoadButton.propTypes = {
	className: PropTypes.string,
	onClickIos: PropTypes.func,
	onClickAndroid: PropTypes.func
};

DownLoadButton.defaultProps = {
	className: ''
};
