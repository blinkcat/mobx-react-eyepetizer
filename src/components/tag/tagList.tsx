import * as React from 'react';
import { Tag } from './tag';
import Divider from '../divider';

export interface TagListProps {
  tagList: string[];
}

export default function TagList({ tagList = [] }: TagListProps) {
  return (
    <div className="tag-list-container">
      <Divider />
      <div className="header">热门标签</div>
      <div className="tag-list">{tagList.map((tag, i) => <Tag key={i} name={tag} />)}</div>
      <style jsx>{`
        .tag-list-container {
          background: rgba(0, 0, 0, 0.4);
        }
        .header {
          margin: 16px 0;
          text-align: center;
        }
        .tag-list {
          padding: 0 37px 16px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
