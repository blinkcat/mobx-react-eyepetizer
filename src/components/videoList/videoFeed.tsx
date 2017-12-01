import * as React from 'react';
import Link from 'next/link';
import VideoCard from './videoCard';

export interface VideoFeedProps {
  date: number | string;
  videoList: Array<{ title: string; meta: string; vid: number; cover: string }>;
}

export default function VideoFeed(props: VideoFeedProps) {
  const { date = '', videoList = [] } = props;
  return (
    <div className="video-list">
      <div className="date">{date}</div>
      {videoList.map(video => (
        <Link href={{ pathname: '/detail', query: { vid: video.vid } }} key={video.vid}>
          <VideoCard {...video} />
        </Link>
      ))}
      <style jsx>{`
        .video-list {
          text-align: center;
          .date {
            background: #fff;
            font-family: Lobster, cursive;
            font-size: 16px;
            line-height: 90px;
          }
        }
      `}</style>
    </div>
  );
}
