import * as React from 'react';
import LazyLoad from 'react-lazyload';

export interface ReplyProps {
  id: number;
  message: string;
  hot?: boolean;
  avatar: string;
  nickname: string;
  createTime: string;
  likeCount: number;
}

export function Reply({ message, hot, avatar, nickname, createTime, likeCount }: ReplyProps) {
  return (
    <div className="reply">
      <div className="like">
        <div className="like-count">
          <div>{likeCount}</div>
          <div className="like-count-icon" />
        </div>
        {hot === true && <div className="like-count-hot">- Hot -</div>}
      </div>
      <LazyLoad height={36}>
        <div className="avatar" />
      </LazyLoad>
      <div className="entity">
        <p className="username">{nickname}</p>
        <p className="time">{createTime}</p>
        <p className="text">{message}</p>
      </div>
      <style jsx>{`
        .reply {
          font-size: 12px;
          padding-bottom: 15px;
          position: relative;
          .like {
            position: absolute;
            text-align: right;
            top: 0;
            right: 16px;
          }
          .like-count > div {
            display: inline-block;
          }
          .like-count-icon {
            background-image: url(
              //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_like_grey@3x.d2a2a2a8.png);
            background-position: 50%;
            background-size: cover;
            height: 15px;
            width: 15px;
            margin-left:5px;
          }
          .like-count-hot {
            font-family: Lobster,cursive;
          }
          .avatar {
            background-position: 50%;
            background-size: cover;
            border-radius: 50%;
            float: left;
            height: 36px;
            margin: 0 13px;
            width: 36px;
            background-image:url(${avatar});
          }
          .entity {
            margin-left: 62px;
            p {
              line-height: 1.5;
              margin: 0;
            }
            .username {
              margin: 0;
              margin-bottom: 4px;
            }
            .time {
              margin-bottom: 4px;
              opacity: 0.6;
            }
            .text {
              margin-bottom: 15px;
              padding-right: 35px;
            }
          }
        }
      `}</style>
    </div>
  );
}
