import * as React from 'react';
import Divider from '../divider';
import { ReplyProps, Reply } from './reply';
import withDataContainer from '../withDataContainer';
import db from '../../http';
import set from 'lodash.set';
import get from 'lodash.get';
import { dataFormat } from '../../util';

export interface ReplyListProps {
  replyList: ReplyProps[];
}

export function ReplyList({ replyList = [] }: ReplyListProps) {
  return (
    <div className="reply-list">
      <Divider />
      <div className="header">热门评论</div>
      <div>{replyList.map(reply => <Reply key={reply.id} {...reply} />)}</div>
      <div className="downloader">
        <button>下载开眼客户端，查看更多精彩评论！</button>
      </div>
      <style jsx>{`
        .reply-list {
          background: rgba(0, 0, 0, 0.4);
          .header {
            margin: 16px 0 10px;
            text-align: center;
          }
          .downloader {
            padding: 0 16px;
            button {
              background: hsla(0, 0%, 100%, 0.3);
              border-radius: 2px;
              border: none;
              line-height: 32px;
              margin-bottom: 16px;
              padding: 0;
              width: 100%;
              color: inherit;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default withDataContainer(
  (props, onData) => {
    db.video
      .replies(props.vid)
      .then(res => {
        onData(null, reorganizeData(res));
      })
      .catch(err => {
        onData(err);
      });
  },
  { propsToWatch: ['vid'] }
)(ReplyList);

export function reorganizeData(res) {
  const result = {};
  set(
    result,
    'replyList',
    res.replyList.map(reply => {
      return {
        id: reply.id,
        createTime: dataFormat(reply.createTime),
        hot: reply.hot,
        likeCount: reply.likeCount,
        message: reply.message,
        avatar: reply.user.avatar,
        nickname: reply.user.nickname
      };
    })
  );
  return result;
}
