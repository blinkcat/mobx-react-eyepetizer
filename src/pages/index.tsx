import * as React from 'react';
import Layout from '../components/layout';
import TopScreen from '../components/topScreen';
import { reorganizeVideoFeedData, VideoFeed } from '../components/videoList';
import Download from '../components/download';
import db from '../http';
import pick from 'lodash.pick';

export default class extends React.Component<any, any> {
  public static async getInitialProps() {
    let res;
    try {
      res = await db.feed();
      res = reorganizeVideoFeedData(res);
    } catch (e) {
      res = [];
    }
    return res;
  }

  public render() {
    const VideoFeedContainerData = pick(this.props, ['date', 'videoList']);
    return (
      <Layout title="Home">
        <TopScreen />
        {/* <VideoFeedContainer {...VideoFeedContainerData} /> */}
        <VideoFeed {...VideoFeedContainerData} />
        <Download />
      </Layout>
    );
  }
}
