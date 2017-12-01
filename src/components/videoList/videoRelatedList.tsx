import * as React from 'react';
import Link from 'next/link';
import VideoCard from './videoCard';
import withDataContainer from '../withDataContainer';
import db from '../../http';
import set from 'lodash.set';
import { second2minute } from '../../util';

export interface VideoRelatedListProps {
  videoList: Array<{ title: string; meta: string; vid: number; cover: string }>;
}

export function VideoRelatedList({ videoList = [] }: VideoRelatedListProps) {
  return (
    <div className="relate-video-list">
      {videoList.map(video => (
        <Link href={{ pathname: '/detail', query: { vid: video.vid } }} key={video.vid}>
          <VideoCard {...video} related />
        </Link>
      ))}
      <style jsx>{`
        .relate-video-list {
          background: rgba(0, 0, 0, 0.4);
          padding: 20px 15px 10px;
        }
      `}</style>
    </div>
  );
}

export default withDataContainer(
  (props, onData) => {
    db.video
      .related(props.vid)
      .then(res => {
        onData(null, reorganizeData(res));
      })
      .catch(err => {
        onData(err);
      });
  },
  { propsToWatch: ['vid'] }
)(VideoRelatedList);

export function reorganizeData(res) {
  const result = {};
  set(
    result,
    'videoList',
    res.videoList.map(video => {
      return {
        vid: video.id,
        cover: video.coverForDetail,
        title: video.title,
        meta: `#${video.category} / ${second2minute(video.duration)}`
      };
    })
  );
  return result;
}
