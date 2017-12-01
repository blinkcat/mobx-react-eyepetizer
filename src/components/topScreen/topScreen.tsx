import * as React from 'react';
import Menu from './menu';
import Content from './content';
import ImageList from './imageList';

interface TopScreenState {
  playVideoBg: boolean;
}

export default class extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { playVideoBg: false };
  }

  public componentDidMount() {
    if (window) {
      this.setState({
        playVideoBg: window.innerWidth > 1024
      });
    }
  }

  public render() {
    return (
      <div className="top-screen">
        <Menu />
        <Content />
        <div className="cover" />
        <div className="video-container">
          {this.state.playVideoBg ? (
            <video
              autoPlay
              loop
              poster="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg"
              src="//static.kaiyanapp.com/eyepetizer-web/homepage.mp4"
            />
          ) : null}
        </div>
        <ImageList />
        <style jsx>{`
          .top-screen {
            height: 100vh;
            overflow: hidden;
            position: relative;

            .cover {
              background: rgba(0, 0, 0, 0.4);
              height: 100%;
              position: absolute;
              width: 100%;
              z-index: -10;
            }
            .video-container {
              height: 100%;
              position: absolute;
              width: 100%;
              z-index: -100;
              video {
                left: 50%;
                min-height: 100%;
                min-width: 100%;
                position: absolute;
                transform: translateX(-50%);
              }
              @media screen and (max-width: 1024px) {
                display: none;
              }
            }
          }
        `}</style>
      </div>
    );
  }
}
