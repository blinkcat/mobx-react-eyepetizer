import withDataContainer from '../withDataContainer';
import Player from './player';
import db from '../../http';
import pick from 'lodash.pick';
import get from 'lodash.get';
import { second2minute } from '../../util';

export default withDataContainer(
  (props, onData) => {
    db.video
      .detail(props.vid)
      .then(res => {
        const result = pick(res, [
          'category',
          'coverForDetail',
          'coverBlurred',
          'description',
          'duration',
          'title',
          'tags'
        ]);
        result.meta = `${result.category} / ${second2minute(result.duration)}`;
        result.tags = result.tags.map(tag => tag.name);
        result.playUrl = get(res, 'playInfo[1].url', res.playUrl);
        delete result.category;
        delete result.duration;
        onData(null, result);
        props.onDataLoaded({ tags: result.tags, coverBlurred: result.coverBlurred, title: result.title });
      })
      .catch(err => {
        onData(err);
      });
  },
  {
    // pure: true,
    propsToWatch: ['vid']
  }
)(Player);
