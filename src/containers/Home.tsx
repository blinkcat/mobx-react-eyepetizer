import React from 'react';
import Screen from 'Components/screen';
import VideoList from 'Components/video-list';
import Footer from 'Components/footer';
import uiStore from 'Stores/uiStore';

export default class Home extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    uiStore.setTitle('mobx-react-eyepetizer');
    uiStore.setDescription('开眼视频');
  }

  public render() {
    return (
      <div style={{ height: '100%' }}>
        <Screen />
        <VideoList />
        <Footer />
      </div>
    );
  }
}
