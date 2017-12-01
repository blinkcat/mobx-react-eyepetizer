import withDataContainer from '../withDataContainer';
import VideoFeed from './videoFeed';
import db from '../../http';
import get from 'lodash.get';
import { second2minute } from '../../util';

export default withDataContainer(
  (props, onData) => {
    db
      .feed()
      .then(res => {
        onData(null, reorganizeData(res));
      })
      .catch(err => {
        onData(err);
      });
  },
  { propsToWatch: [] }
)(VideoFeed);

export function reorganizeData(res) {
  const result = {
    date: get(res, 'dailyList[0].date', Date.now()),
    videoList: get(res, 'dailyList[0].videoList', [])
  };
  result.videoList = result.videoList.map(video => {
    return {
      vid: video.id,
      title: video.title,
      meta: `#${video.category} / ${second2minute(video.duration)}`,
      cover: video.coverForFeed
    };
  });
  const arr = new Date(result.date).toString().split(' ');
  result.date = `- ${arr[1]}. ${arr[2]} -`;
  return result;
}
