import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import PropTypes from 'prop-types';
import styles from './modal.css';

export default function TranstionModal({ open, onBackdropClick, ...other }) {
	return (
		<TransitionGroup component="div">
			{open ? <Modal {...other} onBackdropClick={onBackdropClick} /> : null}
		</TransitionGroup>
	);
}

TranstionModal.propTypes = {
	open: PropTypes.bool,
	img_src: PropTypes.string.isRequired,
	text: PropTypes.element
};

TranstionModal.defaultProps = {
	open: false
};

class Modal extends Component {
	constructor(props) {
		super(props);
	}

	componentWillEnter(cb) {
		requestAnimationFrame(cb);
	}

	componentDidEnter() {
		this.modal.classList.add(styles.root_show);
		this.content.classList.add(styles.content_show);
	}

	componentWillLeave(cb) {
		this.modal.classList.remove(styles.root_show);
		this.content.classList.remove(styles.content_show);
		this.content.addEventListener('transitionend', cb);
	}

	// componentDidLeave() {}

	handleClick = e => {
		const { onBackdropClick } = this.props;
		if (e.target === e.currentTarget && onBackdropClick) {
			onBackdropClick(e);
		}
		e.preventDefault();
	};

	render() {
		const { img_src, text } = this.props;
		return (
			<div
				className={styles.root}
				onClick={this.handleClick}
				ref={modal => {
					this.modal = modal;
				}}
			>
				<div
					className={styles.content}
					ref={content => {
						this.content = content;
					}}
				>
					<img src={img_src} className={styles.img} />
					{text}
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	img_src: PropTypes.string.isRequired,
	text: PropTypes.element,
	close: PropTypes.func
};
