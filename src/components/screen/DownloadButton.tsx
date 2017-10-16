import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './downloadButton.css';

interface DownLoadButtonProp {
  onClickIos: (e: Event) => any;
  onClickAndroid: (e: Event) => any;
  className?: string;
}

export default class DownLoadButton extends Component<DownLoadButtonProp, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { className = '' } = this.props;
    return (
      <div className={classNames(styles.root, { [className]: className })}>
        <a href="#" onClick={this.handleIosClick} className={styles.ios} />
        <a href="#" onClick={this.handleAndroidClick} className={styles.android} />
      </div>
    );
  }

  private handleIosClick = e => {
    const { onClickIos } = this.props;
    if (onClickIos) {
      onClickIos(e);
    }
    e.preventDefault();
  };

  private handleAndroidClick = e => {
    const { onClickAndroid } = this.props;
    if (onClickAndroid) {
      onClickAndroid(e);
    }
    e.preventDefault();
  };
}
