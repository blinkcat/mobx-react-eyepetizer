import * as React from 'react';
import dynamic from 'next/dynamic';

const WechatModal = dynamic(import('../modal/wechatModal'), { ssr: false });

interface MenuState {
  showWechatModal: boolean;
}
export default class extends React.Component<any, MenuState> {
  constructor(props) {
    super(props);
    this.state = {
      showWechatModal: false
    };
  }

  public showModal = () => {
    this.setState({
      showWechatModal: true
    });
  };

  public hideModal = () => {
    this.setState({
      showWechatModal: false
    });
  };

  public render() {
    return (
      <div className="menu">
        <button className="wechat" onClick={this.showModal} />
        <button className="weibo" />
        <button className="email" />
        <WechatModal show={this.state.showWechatModal} onBackdropClick={this.hideModal} />
        <style jsx>
          {`
            .menu {
              font-size: 0;
              position: absolute;
              right: 10px;
              top: 10px;
              z-index: 1;
              button {
                background: none;
                border: none;
                height: 36px;
                margin: 0 8px;
                transition: opacity 0.6s;
                opacity: 0.7;
                padding: 0;
                width: 36px;
                &:hover {
                  opacity: 1;
                }
              }
              .wechat {
                background-size: 36px;
                background-position: 0 -26px;
              }
              .weibo {
                background-size: 36px;
                background-position: 0 -63px;
              }
              .email {
                background-size: 54px;
                background-position: 0 0;
              }
              .email,
              .weibo,
              .wechat {
                background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png);
                background-repeat: no-repeat;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
