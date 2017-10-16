import React from 'react';
import DownloadButton from 'Components/screen/DownloadButton';
import Modals from 'Components/modal/ModalFactory';
import styles from './footer.css';
import dlbStyles from 'Components/screen/downloadButton.css';

interface FooterState {
  open_ios_download_modal: boolean;
  open_android_download_modal: boolean;
}

export default class Footer extends React.Component<any, FooterState> {
  constructor(props) {
    super(props);
    this.state = {
      open_ios_download_modal: false,
      open_android_download_modal: false
    };
  }

  private toggleIosDownloadModal = () => {
    this.setState({
      open_ios_download_modal: !this.state.open_ios_download_modal
    });
  };

  private toggleAndroidDownloadModal = () => {
    this.setState({
      open_android_download_modal: !this.state.open_android_download_modal
    });
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.intro} />
        <div className={styles.images}>
          <div className={styles.icon} />
          <div className={styles.logo} />
          <DownloadButton
            className={`${styles.buttons} ${dlbStyles.root_black}`}
            onClickIos={this.toggleIosDownloadModal}
            onClickAndroid={this.toggleAndroidDownloadModal}
          />
        </div>
        <Modals.Ios_download open={this.state.open_ios_download_modal} onBackdropClick={this.toggleIosDownloadModal} />
        <Modals.Android_download
          open={this.state.open_android_download_modal}
          onBackdropClick={this.toggleAndroidDownloadModal}
        />
      </div>
    );
  }
}
