import * as React from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

const IosModal = dynamic(import('../modal/iosModal'), { ssr: false });
const AndroidModal = dynamic(import('../modal/androidModal'), { ssr: false });

export interface DownloadButtonListProps {
  [key: string]: string;
}

export interface DownloadButtonListState {
  showIosModal: boolean;
  showAndroidModal: boolean;
}

export default class DownloadButtonList extends React.Component<DownloadButtonListProps, DownloadButtonListState> {
  constructor(props: DownloadButtonListProps) {
    super(props);
    this.state = {
      showIosModal: false,
      showAndroidModal: false
    };
  }

  public showIosModal = () => {
    this.setState({
      showIosModal: true
    });
  };

  public hideIosModal = () => {
    this.setState({
      showIosModal: false
    });
  };

  public showAndroidModal = () => {
    this.setState({
      showAndroidModal: true
    });
  };

  public hideAndroidModal = () => {
    this.setState({
      showAndroidModal: false
    });
  };

  public render() {
    return (
      <div className={classNames('download-button-list')}>
        <button className="ios" onClick={this.showIosModal} />
        <button className="android" onClick={this.showAndroidModal} />
        <IosModal show={this.state.showIosModal} onBackdropClick={this.hideIosModal} />
        <AndroidModal show={this.state.showAndroidModal} onBackdropClick={this.hideAndroidModal} />
        <style jsx>
          {`
            .download-button-list{
              font-size: 0;
              height: 52px;
              top: 67%;
              button{
                background: none;
                border: none;
                height: 52px;
                margin: 0 14px;
                opacity: .9;
                transition: opacity .3s;
                width: 162px;
                &.ios,&.android{
                  background-image: url(
                    //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
                  background-repeat: no-repeat;
                  background-size: 642px;
                }
                &.ios{
                  background-position: 0 26.5966%;
                }
                &.android{
                  background-position: 0 8.97332%;
                  @media screen and (max-width: 1024px){
                    bottom: 0;
                  }
                }
                @media screen and (max-width: 1024px){
                  margin: 0;
                  position: absolute;
                }
              }
              @media screen and (max-width: 1024px){
                height: 124px;
                top: 77%;
                width: 162px;
              }
            }
        `}
        </style>
      </div>
    );
  }
}
