import * as React from 'react';
import { createPortal } from 'react-dom';
// https://reactcommunity.org/react-transition-group/
import { Transition } from 'react-transition-group';
import { MouseEvent } from 'react';
import classNames from 'classnames';

interface ModalProps {
  imgUrl: string;
  text: JSX.Element;
  show?: boolean;
  onBackdropClick?: (e: MouseEvent<any>) => void;
}

export default class Modal extends React.Component<ModalProps, any> {
  private el: HTMLDivElement;
  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
  }

  public componentDidMount() {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  public handleClick = (e: MouseEvent<any>) => {
    const { onBackdropClick } = this.props;
    if (e.currentTarget === e.target && onBackdropClick) {
      onBackdropClick(e);
    }
    e.preventDefault();
  };

  public render() {
    const { imgUrl, text, show = false } = this.props;
    const transitionModal = (
      <Transition
        in={show}
        timeout={{
          enter: 0,
          exit: 600
        }}
      >
        {state => {
          return (
            <div
              className={classNames('kyt-modal', {
                'kyt-modal-enter': state === 'entering',
                'kyt-modal-transition': state === 'entered' || state === 'exiting',
                'kyt-modal-leave': state === 'exiting'
              })}
              style={{ display: state !== 'exited' ? 'block' : 'none' }}
              onClick={this.handleClick}
            >
              <div className="content">
                <img src={imgUrl} />
                {text}
              </div>
              <style jsx global>{`
                .kyt-modal-transition {
                  transition: opacity 0.3s;
                  opacity: 1;
                  .content {
                    opacity: 1;
                    transition: all 0.6s;
                    transform: translate3d(-50%, -50%, 0);
                  }
                }
                .kyt-modal {
                  background: rgba(0, 0, 0, 0.3);
                  display: none;
                  height: 100%;
                  left: 0;
                  position: fixed;
                  top: 0;
                  width: 100%;
                  z-index: 10;
                  text-align: center;
                  .content {
                    background: #fff;
                    left: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translate3d(-50%, -50%, 0);
                    z-index: 1000;
                    padding-bottom: 20px;
                    width: 300px;
                    img {
                      max-width: 100%;
                    }
                  }
                  &-leave,
                  &-enter {
                    opacity: 0;
                    .content {
                      transform: translate3d(-50%, -40%, 0);
                    }
                  }
                  a {
                    color: inherit;
                    cursor: pointer;
                    text-decoration: none;
                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
              `}</style>
            </div>
          );
        }}
      </Transition>
    );
    return createPortal(transitionModal, this.el);
  }
}
