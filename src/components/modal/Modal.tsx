import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styles from './modal.css';

interface TranstionModalProp {
  open: boolean;
  img_src: string;
  text: JSX.Element | string;
  onBackdropClick(e: Event): void;
}

export default function TranstionModal({ open, onBackdropClick, text, img_src }: TranstionModalProp) {
  return (
    <TransitionGroup component="div">
      {open ? <Modal text={text} img_src={img_src} onBackdropClick={onBackdropClick} /> : null}
    </TransitionGroup>
  );
}

interface ModalProp {
  img_src: string;
  text: JSX.Element | string;
  onBackdropClick(e: Event): void;
}

class Modal extends React.Component<ModalProp, any> {
  constructor(props) {
    super(props);
  }

  private modal: HTMLElement;
  private content: HTMLElement;

  public componentWillEnter(cb) {
    requestAnimationFrame(cb);
  }

  public componentDidEnter() {
    this.modal.classList.add(styles.root_show);
    this.content.classList.add(styles.content_show);
  }

  public componentWillLeave(cb) {
    this.modal.classList.remove(styles.root_show);
    this.content.classList.remove(styles.content_show);
    this.content.addEventListener('transitionend', cb);
  }

  // componentDidLeave() {}

  private handleClick = e => {
    const { onBackdropClick } = this.props;
    if (e.target === e.currentTarget && onBackdropClick) {
      onBackdropClick(e);
    }
    e.preventDefault();
  };

  public render() {
    const { img_src, text } = this.props;
    return (
      <div
        className={styles.root}
        onClick={this.handleClick}
        ref={modal => {
          this.modal = modal as HTMLElement;
        }}
      >
        <div
          className={styles.content}
          ref={content => {
            this.content = content as HTMLElement;
          }}
        >
          <img src={img_src} className={styles.img} />
          {text}
        </div>
      </div>
    );
  }
}
