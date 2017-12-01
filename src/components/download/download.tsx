import * as React from 'react';
import { DownloadButtonList } from '../topScreen';

export default function Download() {
  return (
    <div className="download">
      <div className="intro" />
      <div className="image-list">
        <div className="icon" />
        <div className="logo" />
        <DownloadButtonList />
      </div>
      <style jsx>{`
        .download {
          padding: 60px 0;
          .intro {
            background-image: url(
              //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
            background-position: 0 100%;
            background-repeat: no-repeat;
            background-size: 428px;
            height: 22px;
            margin: 0 auto 50px;
            width: 428px;
            @media screen and (max-width: 1024px){
              background-image: url(
                //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
              background-position: 0 100%;
              background-repeat: no-repeat;
              background-size: 285px;
              height: 15px;
              width: 285px;
            }
          }
          .image-list {
            font-size: 0;
            margin: 0 auto;
            width: 482px;
            @media screen and (max-width: 1024px){
              text-align: center;
              width: 162px;
            }
            .icon,.logo {
              background-image: url(
                //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
              background-repeat: no-repeat;
              margin-right: 50px;
              @media screen and (max-width: 1024px){
                margin: 0 0 30px;
              }
            }
            .icon {
              background-position: 0 52.54563%;
              background-size: 428px;
              border: 1px solid #888;
              border-radius: 20px;
              height: 100px;
               width: 100px;
              }
            .logo {
              background-position: 0 94.03862%;
              background-size: 642px;
              height: 75px;
              width: 120px;
            }
            :global(.download-button-list) {
              height: 120px;
              position: relative;
              width: 162px;
              :global(button){
                margin:0;
                opacity:1;
                position:absolute;
                left:0;
              }
              :global(button.ios){
                background-position: 0 35.40825%;
                top: 0;
              }
              :global(button.android){
                background-position: 0 17.78496%;
                bottom: 0;
              }
            }
            div,:global(.download-button-list) {
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
      `}</style>
    </div>
  );
}
