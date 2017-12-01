import * as React from 'react';
import Modal from './modal';

export default ({ show, onBackdropClick }) => (
  <Modal
    show={show}
    imgUrl="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png"
    text={
      <div>
        扫描二维码<br />下载 iOS 版开眼<br />
        <a href="#">点击跳转至 App Store</a>
      </div>
    }
    onBackdropClick={onBackdropClick}
  />
);
