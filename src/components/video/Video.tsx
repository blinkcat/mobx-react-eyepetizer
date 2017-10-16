import React from 'react';
import { debounce } from 'lodash';
import styles from './video.css';

interface VideoProp {
  playUrl: string;
  coverForFeed: string;
}

interface VideoState {
  play: boolean;
}

export default class Video extends React.Component<VideoProp, VideoState> {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  }
  private video: HTMLVideoElement;

  private updateVideoHeight = () => {
    const container: HTMLElement = this.video.parentNode as HTMLElement;
    container.style.height = this.video.style.height = `${container.offsetWidth / 16 * 9}px`;
  };

  private updateHeight = debounce(this.updateVideoHeight, 100);

  private handleClick = () => {
    this.setState(
      {
        play: true
      },
      () => {
        this.video.play();
        this.video.setAttribute('controls', 'true');
      }
    );
  };

  public componentDidMount() {
    this.updateVideoHeight();
    window.addEventListener('resize', this.updateHeight);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  public render() {
    const { playUrl, coverForFeed } = this.props;
    return (
      <div className={styles.root}>
        <video
          ref={video => {
            this.video = video as HTMLVideoElement;
          }}
          className={styles.video}
          playsInline
          preload="none"
          src={playUrl}
        />
        {this.state.play ? null : (
          <div
            className={styles.cover}
            style={{
              backgroundImage: `url(${coverForFeed})`
            }}
          />
        )}
        {this.state.play ? null : <div className={styles.play_button} onClick={this.handleClick} />}
      </div>
    );
  }
}
