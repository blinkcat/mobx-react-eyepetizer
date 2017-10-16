import React from 'react';
import DownLoadButton from 'Components/screen/DownloadButton';
import Modals from 'Components/modal/ModalFactory';
import styles from './content.css';

interface ContentState {
  open_ios_download_modal: boolean;
  open_android_download_modal: boolean;
}

export default class Content extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      open_ios_download_modal: false,
      open_android_download_modal: false
    };
  }

  public render() {
    return (
      <div>
        <div className={styles.logo} />
        <div className={styles.intro} />
        <DownLoadButton
          className={styles.content_dbl}
          onClickIos={this.toggleIosDownloadModal}
          onClickAndroid={this.toggleAndroidDownloadModal}
        />
        <a href="http://open.eyepetizer.net/#!/landing" className={styles.entry}>
          <div className={styles.audit} />
          <p className={styles.p}>作者入口</p>
        </a>
        <Modals.Ios_download
          open={this.state.open_ios_download_modal}
          onBackdropClick={this.toggleIosDownloadModal}
        />
        <Modals.Android_download
          open={this.state.open_android_download_modal}
          onBackdropClick={this.toggleAndroidDownloadModal}
        />
      </div>
    );
  }

  private toggleIosDownloadModal: () => void = () => {
    this.setState({
      open_ios_download_modal: !this.state.open_ios_download_modal
    });
  };

  private toggleAndroidDownloadModal: () => void = () => {
    this.setState({
      open_android_download_modal: !this.state.open_android_download_modal
    });
  };
}
