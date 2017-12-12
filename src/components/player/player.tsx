import * as React from 'react';
import Divider from '../divider';

export interface PlayerProps {
  playUrl: string;
  title: string;
  meta: string;
  tags?: string[];
  coverForDetail: string;
  description: string;
}

export interface PlayerState {
  play: boolean;
}

export default class Player extends React.Component<PlayerProps, PlayerState> {
  private video: HTMLVideoElement;
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  }

  public componentWillReceiveProps(nextProps: PlayerProps) {
    // ???
    if (nextProps.playUrl !== this.props.playUrl) {
      this.setState({ play: false });
    }
  }

  public componentWillUnmount() {
    this.video = null;
  }

  public render() {
    const { playUrl, title, meta, coverForDetail, description } = this.props;
    const { play } = this.state;
    return (
      <div className="player-container">
        <div className="player">
          <video playsInline preload="none" controls={play} src={playUrl} ref={this.getVideoElement} />
          <div
            className="cover"
            style={{ backgroundImage: `url(${coverForDetail})`, display: play ? 'none' : 'block' }}
          />
          <div className="play-button" onClick={this.playVideo} style={{ display: play ? 'none' : 'block' }} />
        </div>
        <div className="video-meta">
          <h1>{title}</h1>
          <Divider short />
          <p>{meta}</p>
          <p className="description">{description}</p>
        </div>
        <style jsx>{`
          .player {
            background: #000;
            overflow: hidden;
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            div,
            video {
              height: 100%;
              position: absolute;
              width: 100%;
              left: 0;
            }
            .cover {
              background-position: bottom;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .play-button {
              background-color: rgba(0, 0, 0, 0.15);
              background-image: url(
                //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_play@2x.3b9f9ba5.png);
              background-position: 50%;
              background-repeat: no-repeat;
              background-size: 60px 60px;
              cursor: pointer;
              transition: background-color 0.5s;
            }
          }
          .video-meta {
            background: rgba(0,0,0,.2);
            padding: 15px;
            padding-bottom: 4px;
            :global(.divider){
              margin-bottom: 7px;
            }
            h1, p {
              line-height: 1.5;
            }
            h1 {
              font-size: 20px;
              margin: 0;
              margin:0 0 7px 0;
            }
            p{
              margin:0 0 12px 0;
              &.description{
                margin:0 0 11px 0;
                opacity: .85;
              }
            }
          }
        `}</style>
      </div>
    );
  }

  private playVideo = () => {
    this.setState({ play: true }, () => {
      this.video.play();
    });
  };

  private getVideoElement = v => {
    this.video = v;
  };
}
