import * as React from 'react';
import classNames from 'classnames';

export interface DividerProps {
  short?: boolean;
}

export default function Divider(props: DividerProps) {
  return (
    <div className={classNames('divider', { short: props.short })}>
      <style jsx>{`
        .divider {
          background: #fff;
          height: 1px;
          @media (-webkit-min-device-pixel-ratio: 2) {
            transform: scaleY(0.5);
          }
          &.short {
            width: 40px;
          }
        }
      `}</style>
    </div>
  );
}
