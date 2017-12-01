import * as React from 'react';
import Layout from '../components/layout';
import PlayerContainer from '../components/player';
import Loading from '../components/loading';
import Divider from '../components/divider';
import { VideoRelatedListContainer } from '../components/videoList';
import ReplyListContainer from '../components/replyList';
import TagList from '../components/tag';

interface DetailState {
  loadVideoSuccess: boolean;
  tagList: string[];
  bg: string;
  title: string;
}

export default class extends React.Component<any, DetailState> {
  constructor(props) {
    super(props);
    this.state = { loadVideoSuccess: false, tagList: [], bg: '', title: '' };
  }

  public render() {
    const { vid } = this.props.url.query;
    return (
      <Layout title={this.state.title}>
        <div className="container">
          {this.state.loadVideoSuccess === false && <Loading />}
          <PlayerContainer vid={vid} onDataLoaded={this.setLoadVideoData} />
          <Divider />
          <DownloadArea />
          <Divider />
          <VideoRelatedListContainer vid={vid} />
          <ReplyListContainer vid={vid} />
          <TagList tagList={this.state.tagList} />
          <Divider />
          <Footer />
          <div className="video-cover-blurred" style={{ backgroundImage: `url(${this.state.bg})` }} />
          <style jsx global>
            {`
              body {
                background: #333;
                color: #fff;
              }
            `}
          </style>
          <style jsx>{`
            .container {
              margin: 0 auto;
              max-width: 700px;
              overflow: hidden;
              position: relative;
            }
            .video-cover-blurred {
              background-position: 50%;
              background-size: 100% 100%;
              height: 100%;
              position: absolute;
              top: 0;
              transform: rotate(180deg) scaleX(-1);
              width: 100%;
              z-index: -10;
              padding-top: 56.25%;
            }
          `}</style>
        </div>
      </Layout>
    );
  }

  private setLoadVideoData = obj => {
    this.setState({ loadVideoSuccess: true, tagList: obj.tags, bg: obj.coverBlurred, title: obj.title });
  };
}

export function DownloadArea() {
  return (
    <div className="download-area">
      <div className="logo" />
      <button />
      <style jsx>{`
      .download-area {
        background: rgba(0, 0, 0, 0.3);
        height: 70px;
        position: relative;
        z-index: 10;
        div,button{
          background-size: cover;
          padding: 0;
          position: absolute;
        }
        .logo {
          background-image: url(
            //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/logo_launch@3x.ff359b72.png);
          height: 44px;
          left: 8px;
          top: 12px;
          width: 174px;
        }
        button {
          background-image: url(
            //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/btn_launch@3x.950ac618.png);
          height: 33px;
          right: 12px;
          top: 18px;
          width: 86px;
          border: none;
          color: inherit;
        }
      }
    `}</style>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="bottom-logo" />
      <img
        src={`
      //static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.243f15a2.png`}
        alt="eyepetizer wechat qrcode"
      />
      <div className="qr-tips">长按二维码关注「开眼 Eyepetizer」微信公众号</div>
      <style jsx>{`
        .footer {
          background: rgba(0, 0, 0, 0.4);
          padding: 40px 0 60px;
          div {
            background-size: cover;
            display: block;
            margin: 0 auto 40px;
          }
          .bottom-logo {
            background-image: url(
              //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/bottom_logo@3x.556cae6b.png);
            height: 94px;
            width: 90px;
          }
          img {
            display: block;
            margin: 0 auto 20px;
            width: 80px;
          }
          .qr-tips {
            background: transparent;
            color: #fff;
            font-size: 12px;
            letter-spacing: 1px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
