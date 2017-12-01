import * as React from 'react';
import { createPortal } from 'react-dom';

export default function Loading() {
  return (
    <div className="loading">
      <div className="out" />
      <div className="in" />
      <style jsx>{`
        .loading {
          background: #fff;
          height: 100%;
          opacity: 1;
          position: fixed;
          left: 0;
          transition: opacity 0.3s;
          width: 100%;
          z-index: 10000;
          div{
            background-size: cover;
            height: 48px;
            left: 50%;
            margin: -24px 0 0 -35px;
            position: absolute;
            top: 50%;
            width: 70px;
          }
          .out{
            background-image: url(
              //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/loading_out@3x.444b89a3.png);
          }
          .in{
            animation: e 0.5s linear infinite;
            background-image: url(
              //static.kaiyanapp.com/eyepetizer-web/assets/images/detail/loading_in@3x.94a9c4b4.png);
          }
        }
        @keyframes e {
          0% {
            transform: rotate(0);
          }

          to {
            transform: rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
}
