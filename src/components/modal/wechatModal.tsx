import * as React from 'react';
import Modal from './modal';

export default ({ show, onBackdropClick }) => (
  <Modal
    show={show}
    imgUrl="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg"
    text={
      <div>
        扫描二维码<br />关注「开眼」微信公众号
      </div>
    }
    onBackdropClick={onBackdropClick}
  />
);
