import * as React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';

export interface VideoCardProps {
  vid?: number;
  related?: boolean;
  title: string;
  meta: string;
  cover: string;
  onClick?: (...args) => void;
}

export default function VideoCard({ title, meta, cover, related, onClick: onVideoCardClick }: VideoCardProps) {
  return (
    <div className={classNames({ 'video-card': !related, 'video-card-related': related })} onClick={onVideoCardClick}>
      {!related && <div className="cover" />}
      <LazyLoad height={related ? 88 : 245} once>
        <div className="video-cover" />
      </LazyLoad>
      {!related && <div className="title">{title}</div>}
      {!related && <div className="meta">{meta}</div>}
      {related && (
        <div className="meta">
          <div className="title">{title}</div>
          <div className="category">{meta}</div>
        </div>
      )}
      <style jsx>{`
        .video-card {
          color: #fff;
          cursor: pointer;
          height: 450px;
          position: relative;
          .title,
          .meta {
            position: absolute;
            top: 50%;
            width: 100%;
          }
          &:hover {
            .cover {
              background: transparent;
            }
          }
          @media screen and (max-width: 1024px) {
            height: 225px;
          }
          .cover {
            background: rgba(0, 0, 0, 0.4);
            height: 100%;
            position: absolute;
            transition: background 0.6s;
            width: 100%;
          }
          .video-cover {
            position: absolute;
            width: 100%;
            height: 100%;
            background-position: 50%;
            background-size: cover;
            background-image: url(${cover});
          }
          .title {
            font-size: 16px;
            font-weight: 700;
            transform: translateY(-24px);
          }
          .meta {
            transform: translateY(12px);
          }
        }
      `}</style>
      <style jsx>{`
        .video-card-related {
          margin-bottom: 20px;
          position: relative;
          .video-cover {
            background-position: 50%;
            background-size: cover;
            border: 1px solid hsla(0, 0%, 100%, 0.3);
            padding-top: 25%;
            width: 40%;
            background-image: url(${cover});
            @media (-webkit-min-device-pixel-ratio: 2) {
              border-width: 0.5px;
            }
          }
          .meta {
            left: 40%;
            margin-left: 15px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .title {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 5px;
            @media (min-width: 400px) {
              font-size: 14px;
            }
          }
          .category {
            font-size: 12px;
            opacity: 0.85;
            @media (min-width: 400px) {
              font-size: 13px;
            }
          }
        }
      `}</style>
    </div>
  );
}
