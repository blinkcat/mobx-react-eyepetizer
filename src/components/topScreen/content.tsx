import * as React from 'react';
import DownloadButtonList from './downloadButtonList';

export default () => (
  <div className="content">
    <div className="logo" />
    <div className="intro" />
    <DownloadButtonList />
    <div className="entry-button">
      <a href="http://open.eyepetizer.net/#!/landing">
        <button className="audit" />
        <p>作者入口</p>
      </a>
    </div>
    <style jsx>
      {`
        .content {
          div,:global(.download-button-list){
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
          }
          .intro,
          .logo {
            background-image: url(
              //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
            background-repeat: no-repeat;
            @media screen and (max-width: 1024px){
              background-image: url(
                //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
            }
          }
          .intro {
            background-position: 0 69.09976%;
            background-size: 642px;
            height: 54px;
            top: 54%;
            width: 351px;
            @media screen and (max-width: 1024px){
              background-position: 0 69.09976%;
              background-size: 528.59829px;
              height: 44px;
              top: 54%;
              width: 289px;
            }
          }
          .logo{
            background-position: 0 81.02435%;
            background-size: 1284px;
            height: 150px;
            top: 30%;
            width: 400px;
            @media screen and (max-width: 1024px){
              background-position: 0 81.02435%;
              background-size: 853.86px;
              height: 100px;
              top: 30%;
              width: 266px;
            }
          }
          .entry-button{
            height: 52px;
            margin-top: 120px;
            top: 67%;
            button{
              background: none;
              border: none;
              height: 53px;
              margin: 0 14px;
              opacity: .4;
              transition: opacity .3s;
              width: 220px;
              cursor: pointer;
              &:hover{
                opacity:0.8;
              }
              &.audit{
                background-image: url(
                  //static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s65574ce6bf.2cb0c081.png);
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: 642px;
              }
            }
            p{
              margin: 0;
              position: absolute;
              font-size: 14px;
              text-align: center;
              pointer-events: none;
              color: #fff;
              top: 0;
              width: 100%;
              height: 100%;
              line-height: 52px;
              letter-spacing: 4px;
            }
            @media screen and (max-width: 1024px){
              display: none;
            }
          }
        }
      `}
    </style>
  </div>
);
