import React from 'react';
import classNames from 'classnames';
import styles from './menu.css';

interface MenuProp {
  className: string;
  clickWechat: () => any;
}

export default function Menu({ className, clickWechat }: MenuProp) {
  return (
    <div className={classNames(styles.root, { [className]: className })}>
      <a href="#" onClick={clickWechat} className={styles.item_wechat} />
      <a href="http://weibo.com/eyepetizer" className={styles.item_weibo} />
      <a href="mailto:bd@eyepetizer.net" className={styles.item_email} />
    </div>
  );
}
