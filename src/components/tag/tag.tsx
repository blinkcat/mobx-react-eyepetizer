import * as React from 'react';

export interface TagProps {
  name: string;
}

export function Tag({ name }: TagProps) {
  return (
    <span className="tag">
      {name}
      <style jsx>{`
        .tag {
          background: hsla(0, 0%, 100%, 0.3);
          border-radius: 2px;
          display: inline-block;
          font-size: 12px;
          letter-spacing: 3px;
          line-height: 22px;
          margin: 4px;
          padding: 0 6px 0 9px;
        }
      `}</style>
    </span>
  );
}
