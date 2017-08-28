import React, { Component } from 'react';
import styles from './modal.css';
import classNames from 'classnames';

export default class Modal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { img_src, text, show, hidden_cb } = this.props;
		return (
			<div
				className={classNames(styles.modal, { [styles.transition]: show })}
				style={{ display: show ? 'block' : '' }}
				onClick={hidden_cb}
			>
				<div className={classNames(styles.content, { [styles.transition_content]: show })}>
					<img src={img_src} className={styles.img} />
					<div dangerouslySetInnerHTML={{ __html: text }} />
				</div>
			</div>
		);
	}
}
