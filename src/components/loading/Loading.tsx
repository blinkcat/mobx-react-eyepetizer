import React from 'react';
import classNames from 'classnames';
import styles from './loading.css';

interface LoadingProp {
  className?: string;
}

export default function Loading({ className = '' }: LoadingProp) {
  return (
    <div className={classNames(styles.root, { [className]: className })}>
      <div className={styles.out} />
      <div className={styles.ining} />
    </div>
  );
}
