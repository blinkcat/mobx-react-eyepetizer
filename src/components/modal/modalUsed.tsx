import * as React from 'react';
import Modal from './modal';

export const WechatModal = ({ show }) => (
  <Modal
    imgUrl="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg"
    show={show}
    text={
      <div>
        扫描二维码<br />关注「开眼」微信公众号
      </div>
    }
  />
);

export const IosModal = ({ show }) => (
  <Modal
    show={show}
    imgUrl="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png"
    text={
      <div>
        扫描二维码<br />下载 iOS 版开眼<br />
        <a href="#">点击跳转至 App Store</a>
      </div>
    }
  />
);

export const AndroidModal = ({ show }) => (
  <Modal
    show={show}
    imgUrl="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png"
    text={
      <div>
        扫描二维码<br />下载 iOS 版开眼<br />
        <a href="#">点击跳转至 App Store</a>
      </div>
    }
  />
);
