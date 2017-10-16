import Modals from 'Components/modal/ModalFactory';
import React from 'react';
import Content from './Content';
import ImageList from './ImgList';
import Menu from './Menu';
import styles from './screen.css';

interface ScreenState {
  open_wechat_modal: boolean;
}

class Screen extends React.Component<{}, ScreenState> {
  constructor(props) {
    super(props);
    this.state = {
      open_wechat_modal: false
    };
  }

  public render() {
    return (
      <div className={styles.root}>
        <Menu clickWechat={this.toggleWechatModal} className={styles.menu} />
        <Content />
        <div className={styles.cover} />
        <VideoPlayer
          poster="http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg"
          src="http://static.kaiyanapp.com/eyepetizer-web/homepage.mp4"
        />
        <ImageList />
        <Modals.Wechat
          open={this.state.open_wechat_modal}
          onBackdropClick={this.toggleWechatModal}
        />
      </div>
    );
  }

  private toggleWechatModal = (): void => {
    this.setState({
      open_wechat_modal: !this.state.open_wechat_modal
    });
  };
}

interface VideoPlayerProp {
  poster: string;
  src: string;
}

function VideoPlayer({ poster, src }: VideoPlayerProp): JSX.Element {
  return (
    <div className={styles.videow}>
      <video className={styles.video} autoPlay loop poster={poster} src={src} />
    </div>
  );
}

export { Screen as default, VideoPlayer };
